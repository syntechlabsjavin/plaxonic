import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

/* ─── Country list for the custom dropdown ─── */
const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bahrain", "Bangladesh", "Belgium", "Brazil", "Canada", "China",
  "Denmark", "Egypt", "Finland", "France", "Germany", "Ghana",
  "Hong Kong", "India", "Indonesia", "Ireland", "Israel", "Italy",
  "Japan", "Jordan", "Kenya", "Kuwait", "Malaysia", "Mexico",
  "Netherlands", "New Zealand", "Nigeria", "Norway", "Oman", "Pakistan",
  "Philippines", "Poland", "Portugal", "Qatar", "Russia", "Saudi Arabia",
  "Singapore", "South Africa", "South Korea", "Spain", "Sri Lanka",
  "Sweden", "Switzerland", "Thailand", "Turkey", "UAE", "Ukraine",
  "United Kingdom", "United States", "Vietnam",
];

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  organisation: string;
  website: string;
  message: string;
  consent: boolean;
}

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  organisation: "",
  website: "",
  message: "",
  consent: false,
};

const MAX_CHARS = 500;

const ContactFormSection=() =>{
  const [form, setForm] = useState<FormState>(INITIAL);
  const [countryOpen, setCountryOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);

  const remaining = MAX_CHARS - form.message.length;

  /* close country dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const canSubmit =
    form.fullName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.message.trim() &&
    form.consent &&
    !submitting;

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      // Replace with your actual API endpoint
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
      await new Promise((r) => setTimeout(r, 800)); // demo delay
      setSubmitted(true);
      setForm(INITIAL);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full h-12 border border-gray-300 bg-white px-4 text-gray-900 text-sm " +
    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none " +
    "transition-colors placeholder:text-gray-400";

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* ════════════ LEFT — Form ════════════ */}
          <div>
            {/* Intro */}
            <div className="mb-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  Get In Touch
                </span>
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                We will direct your inquiry to the dedicated team depending on
                your query. Fill the form below to let us know more, or view our
                office locations further down the page.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center max-w-3xl">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Thank you for reaching out!
                </p>
                <p className="text-gray-600 text-sm">
                  Our team will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                    <span className="text-primary ml-0.5">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email
                    <span className="text-primary ml-0.5">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                    <span className="text-primary ml-0.5">*</span>
                  </label>
                  <div className="phone-field flex items-center w-full h-12 border border-gray-300 bg-white px-4 transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                    <PhoneInput
                      international
                      defaultCountry="PK"
                      value={form.phone}
                      onChange={(val) => update("phone", val || "")}
                      className="PhoneInput w-full"
                      numberInputProps={{
                        className:
                          "PhoneInputInput w-full border-0 outline-none text-sm text-gray-900 bg-transparent",
                        required: true,
                      }}
                    />
                  </div>
                </div>

                {/* Country (custom dropdown) */}
                <div ref={countryRef} className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <button
                    type="button"
                    onClick={() => setCountryOpen((v) => !v)}
                    className={`${inputClass} flex items-center justify-between text-left ${
                      form.country ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    <span className="truncate">
                      {form.country || "Select a country"}
                    </span>
                    <ChevronDown
                      className={`ml-2 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform ${
                        countryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {countryOpen && (
                    <ul className="absolute z-40 mt-1 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-lg py-1">
                      {COUNTRIES.map((c) => (
                        <li key={c}>
                          <button
                            type="button"
                            onClick={() => {
                              update("country", c);
                              setCountryOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              form.country === c
                                ? "bg-primary/10 text-primary"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {c}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Organisation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    value={form.organisation}
                    onChange={(e) => update("organisation", e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="text"
                    inputMode="url"
                    placeholder="plaxonic.com"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you?
                    <span className="text-primary ml-0.5">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    maxLength={MAX_CHARS}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${inputClass} h-auto resize-y py-3`}
                  />
                  <div className="mt-1.5 text-right text-xs text-gray-400 tabular-nums">
                    Remaining Characters: {remaining}/{MAX_CHARS}
                  </div>
                </div>

                {/* Cloudflare Turnstile placeholder
                    Replace with real <Turnstile /> widget when you have a site key.
                    npm i @marsidev/react-turnstile
                */}
                <div
                  id="cf-turnstile"
                  className="w-[300px] h-[65px] border border-gray-200 bg-gray-50 flex items-center justify-center text-xs text-gray-400"
                >
                  {/* <Turnstile siteKey="YOUR_SITE_KEY" onSuccess={...} /> */}
                  Cloudflare Turnstile
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 accent-primary flex-shrink-0"
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    By submitting this form, you consent to receive messages from
                    Plaxonic regarding our services. Message and data rates may
                    apply. For details on how your data is used and protected,
                    please see our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </a>
                    . Plaxonic does not share your data with third parties.
                  </span>
                </label>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-3.5 hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed group"
                  >
                    {submitting ? "Submitting…" : "Submit"}
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ════════════ RIGHT — Sticky aside ════════════ */}
          <aside className="relative overflow-hidden lg:sticky lg:top-28 bg-[#0f1420] text-white p-8 lg:p-9">
            {/* Background video */}
            <video
              src="https://plaxonic.com/qw.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[#0f1420]/80" />

            <div className="relative z-10">
              <h2 className="font-inter text-2xl lg:text-3xl font-bold leading-tight mb-6">
                Please feel free to reach us.
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-white font-semibold mb-1.5">
                    Need more assistance?
                  </div>
                  <a
                    href="mailto:contact@plaxonic.com"
                    className="inline-flex items-center gap-2 text-[#5ec8f0] hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    contact@plaxonic.com
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-white font-semibold mb-1.5">
                    HR Helpdesk
                  </div>
                  <a
                    href="mailto:hr@plaxonic.com"
                    className="inline-flex items-center gap-2 text-[#5ec8f0] hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    hr@plaxonic.com
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;