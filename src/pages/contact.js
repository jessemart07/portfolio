import { useRef, useState } from "react";
import { Arrow, Meta, PageIntro } from "@/components/Site";
import { contactEmail } from "@/content/site";
import {
  serviceOptions,
  validateEnquiry,
  sendEnquiry,
} from "@/lib/enquiry.mjs";
function Field({
  errors,
  name,
  label,
  type = "text",
  autoComplete,
  optional = false,
  maxLength,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} {optional ? <span>(optional)</span> : <span>(required)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={!optional}
        maxLength={maxLength}
        aria-invalid={errors[name] ? "true" : undefined}
        aria-describedby={errors[name] ? name + "-error" : undefined}
      />
      {errors[name] && (
        <p id={name + "-error"} className="field-error">
          {errors[name]}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const sending = useRef(false);
  const accessKey = process.env.NEXT_PUBLIC_WEB_FORMS_API_KEY;
  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const nextErrors = validateEnquiry(data);
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) {
      form.elements[Object.keys(nextErrors)[0]].focus();
      return;
    }
    if (!accessKey) {
      setStatus("unavailable");
      return;
    }
    if (data.botcheck) {
      setStatus("error");
      return;
    }
    sending.current = true;
    setBusy(true);
    try {
      await sendEnquiry(data, accessKey);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
      setBusy(false);
    }
  }
  return (
    <>
      <Meta
        title="Discuss a project | Jesse Codes"
        description="Tell Jesse Martin about your web, mobile or business software project."
        path="/contact"
      />
      <PageIntro
        label="Let’s build something useful"
        title="Let’s talk about your project."
      >
        <p>
          Tell me a little about your business, what you need and any timing you
          have in mind. It’s fine if you’re still working out the details.
        </p>
      </PageIntro>
      <div className="container contact-layout">
        <aside className="contact-aside">
          <h2>A direct conversation.</h2>
          <p>
            Your enquiry comes to me. We can talk through the problem, what you
            have so far and the next steps.
          </p>
          <a href={"mailto:" + contactEmail}>{contactEmail} <Arrow /></a>
          <p className="contact-note">
            Based in Jeffreys Bay, South Africa.
            <br />
            Available for remote collaboration.
          </p>
        </aside>
        <form
          className="contact-form"
          onSubmit={submit}
          noValidate
          action="https://api.web3forms.com/submit"
          method="POST"
          aria-busy={busy}
        >
          <input type="hidden" name="access_key" value={accessKey || ""} />
          <div className="bot-field" aria-hidden="true">
            <label htmlFor="botcheck">Leave this empty</label>
            <input
              id="botcheck"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="form-row">
            <Field
              errors={errors}
              name="name"
              label="Name"
              autoComplete="name"
              maxLength={80}
            />
            <Field
              errors={errors}
              name="email"
              label="Email"
              type="email"
              autoComplete="email"
              maxLength={254}
            />
          </div>
          <Field
            errors={errors}
            name="company"
            label="Company"
            optional
            autoComplete="organization"
            maxLength={160}
          />
          <div className="field">
            <label htmlFor="service">
              What do you need help with? <span>(optional)</span>
            </label>
            <select id="service" name="service" defaultValue="">
              <option value="">Select an area</option>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">
              Project details <span>(required)</span>
            </label>
            <p className="field-hint" id="message-hint">
              What are you trying to achieve? Include any timing you have in
              mind.
            </p>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={
                "message-hint" + (errors.message ? " message-error" : "")
              }
            />
            {errors.message && (
              <p id="message-error" className="field-error">
                {errors.message}
              </p>
            )}
          </div>
          {!accessKey && (
            <p className="form-status">
              The enquiry form is currently unavailable. Please{" "}
              <a href={"mailto:" + contactEmail}>email me directly</a>.
            </p>
          )}
          <button
            className="button"
            type="submit"
            disabled={busy || !accessKey}
          >
            {busy ? "Sending…" : "Send enquiry"}{" "}
            <Arrow />
          </button>
          <div role="status" aria-live="polite" aria-atomic="true">
            {status && (
              <p
                className={
                  "form-status " + (status === "success" ? "" : "error")
                }
              >
                {status === "success"
                  ? "Thanks. Your enquiry has been sent."
                  : status === "unavailable"
                    ? "The form is unavailable. Please use the email link."
                    : "Your enquiry couldn’t be sent. Please try again, or use the email link below."}
                {status !== "success" && (
                  <>
                    {" "}
                    <a href={"mailto:" + contactEmail}>Email Jesse <Arrow /></a>
                  </>
                )}
              </p>
            )}
          </div>
          <noscript>
            <p>
              JavaScript is disabled. You can use the email link to get in
              touch.
            </p>
          </noscript>
        </form>
      </div>
    </>
  );
}
