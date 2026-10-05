export const serviceOptions = [
  "Web application",
  "Mobile application",
  "APIs and integrations",
  "Existing product/support",
  "Not sure yet",
];
export function validateEnquiry(data) {
  const errors = {};
  if (
    typeof data.name !== "string" ||
    !data.name.trim() ||
    data.name.length > 80
  )
    errors.name = "Please enter your name (up to 80 characters).";
  if (
    typeof data.email !== "string" ||
    data.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  )
    errors.email = "Please enter a valid email address.";
  if (
    typeof data.message !== "string" ||
    !data.message.trim() ||
    data.message.length > 5000
  )
    errors.message =
      "Please tell me about your project (up to 5,000 characters).";
  return errors;
}
export async function sendEnquiry(
  data,
  accessKey,
  { fetchImpl = fetch, timeoutMs = 15000 } = {},
) {
  if (!accessKey || data.botcheck || Object.keys(validateEnquiry(data)).length)
    throw new Error("Invalid enquiry");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
        company: String(data.company || "").slice(0, 160),
        access_key: accessKey,
        botcheck: false,
        subject:
          "Portfolio enquiry: " +
          (serviceOptions.includes(data.service)
            ? data.service
            : "General enquiry"),
        from_name: "Jesse Codes portfolio",
      }),
      signal: controller.signal,
    });
    const result = await response.json();
    if (!response.ok || result.success !== true)
      throw new Error("Submission failed");
  } finally {
    clearTimeout(timeout);
  }
}
