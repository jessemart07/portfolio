import test from "node:test";
import assert from "node:assert/strict";
import { validateEnquiry, sendEnquiry } from "../src/lib/enquiry.mjs";
const valid = {
  name: "Preview visitor",
  email: "visitor@example.com",
  message: "A test enquiry that never leaves this process.",
  company: "",
  service: "Web application",
  botcheck: "",
};
test("rejects empty, malformed and oversized required fields", () => {
  assert.deepEqual(
    Object.keys(validateEnquiry({ name: " ", email: "bad", message: "" })),
    ["name", "email", "message"],
  );
  assert.ok(validateEnquiry({ ...valid, message: "x".repeat(5001) }).message);
  assert.deepEqual(validateEnquiry(valid), {});
});
test("missing provider config or a honeypot prevents network requests", async () => {
  const fetchImpl = () => {
    throw new Error("Network must not run");
  };
  await assert.rejects(
    sendEnquiry(valid, "", { fetchImpl }),
    /Invalid enquiry/,
  );
  await assert.rejects(
    sendEnquiry({ ...valid, botcheck: "bot" }, "mock-key", { fetchImpl }),
    /Invalid enquiry/,
  );
});
test("maps subject and succeeds only on confirmed provider success", async () => {
  await sendEnquiry(
    { ...valid, name: " Preview visitor ", service: "unrecognised" },
    "mock-key",
    {
      fetchImpl: async (url, options) => {
        assert.equal(url, "https://api.web3forms.com/submit");
        const body = JSON.parse(options.body);
        assert.equal(body.name, "Preview visitor");
        assert.equal(body.subject, "Portfolio enquiry: General enquiry");
        assert.equal(body.botcheck, false);
        return { ok: true, json: async () => ({ success: true }) };
      },
    },
  );
});
test("provider refusal, HTTP failure and invalid JSON cannot produce success", async () => {
  for (const response of [
    { ok: true, json: async () => ({ success: false }) },
    { ok: false, json: async () => ({ success: true }) },
    {
      ok: true,
      json: async () => {
        throw new Error("Bad JSON");
      },
    },
  ]) {
    await assert.rejects(
      sendEnquiry(valid, "mock-key", { fetchImpl: async () => response }),
    );
  }
});
test("network failure propagates and a stalled request times out", async () => {
  await assert.rejects(
    sendEnquiry(valid, "mock-key", {
      fetchImpl: async () => {
        throw new Error("Offline");
      },
    }),
    /Offline/,
  );
  await assert.rejects(
    sendEnquiry(valid, "mock-key", {
      timeoutMs: 10,
      fetchImpl: async (_url, { signal }) =>
        new Promise((_resolve, reject) =>
          signal.addEventListener("abort", () => reject(new Error("Timeout"))),
        ),
    }),
    /Timeout/,
  );
});
