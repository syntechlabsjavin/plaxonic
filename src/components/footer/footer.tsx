import { Check } from "lucide-react";

const WHAT_WE_DO = [
  { label: "Web Application Development", href: "/services/web-application-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "SaaS & Platform Engineering", href: "/services/platform-engineering-services" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "RAG Systems", href: "/services/rag-systems" },
  { label: "AI Agent Applications", href: "/services/ai-agent-applications" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "Cloud Cost Optimization", href: "/services/cloud-cost-optimization" },
  { label: "Managed Cloud & DevOps Services", href: "/services/cloud-managed-services" },
  { label: "Cloud Infrastructure Management", href: "/services/cloud-infrastructure-management" },
  { label: "Internet of Things (IoT)", href: "/services/internet-of-things" },
  { label: "AI-Driven SEO", href: "/services/ai-driven-seo" },
];

const WHO_WE_SERVE = [
  { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
  { label: "Banking & Financial Services", href: "/industries/banking" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Retail & E-commerce", href: "/industries/retail-and-ecommerce" },
  { label: "Education & EdTech", href: "/industries/education" },
  { label: "Logistics & Supply Chain", href: "/industries/logistics" },
  { label: "Energy & Utilities", href: "/industries/energy" },
  { label: "Telecommunications & Media", href: "/industries/telecommunications" },
  { label: "Travel & Hospitality", href: "/industries/travel" },
  { label: "Government & Public Sector", href: "/industries/government-public-sector" },
  { label: "Automotive & Mobility", href: "/industries/automotive-and-mobility" },
  { label: "Real Estate & Construction", href: "/industries/real-estate-and-construction" },
];

const WHO_WE_ARE = [
  { label: "About Plaxonic", href: "/about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Leadership", href: "/leadership" },
  { label: "Culture", href: "/culture" },
  { label: "Social Impact & Community", href: "/social-impact" },
  { label: "The Plaxonic Advantage", href: "/plaxonic-advantage" },
];

const INSIGHTS = [
  { label: "Perspectives", href: "/insights/perspectives" },
  { label: "Blog", href: "/insights/blog" },
  { label: "Case Studies", href: "/insights/case-studies" },
  { label: "Research & Reports", href: "/insights/research" },
  { label: "Newsroom", href: "/insights/newsroom" },
];

const CAREERS = [
  { label: "Why work with Plaxonic", href: "/why-work-with-plaxonic" },
  { label: "Life at Plaxonic", href: "/life-at-plaxonic" },
  { label: "Plaxonic Promise", href: "/plaxonic-promise" },
  { label: "Learning and Development", href: "/learning-and-development" },
  { label: "Hiring Process", href: "/hiring-process" },
  { label: "Internships & Early Careers", href: "/internships-early-careers" },
  { label: "Open Positions", href: "/open-positions" },
];

const LEGAL_LINKS = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility Statement", href: "/accessibility" },
  { label: "Fraud Alert", href: "/fraud-alert" },
  { label: "Sitemap", href: "/sitemap.xml", external: true },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/syntechlabs",
    icon: "linkedin" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/syntechlabs",
    icon: "facebook" as const,
  },
  {
    label: "X",
    href: "https://x.com/syntechlabs",
    icon: "x" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/syntechlabs",
    icon: "instagram" as const,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@syntechlabs",
    icon: "youtube" as const,
  },
];

const BENEFITS = ["Free Consultation", "Expert Team", "24/7 Support"] as const;

const SocialIcon = ({
  name,
  className,
}: {
  name: "linkedin" | "facebook" | "x" | "instagram" | "youtube";
  className?: string;
}) => {
  switch (name) {
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          role="img"
        >
          <title>LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          role="img"
        >
          <title>Facebook</title>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          role="img"
        >
          <title>X (Twitter)</title>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          role="img"
        >
          <title>Instagram</title>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          role="img"
        >
          <title>YouTube</title>
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
  }
};

/** Inline Plaxonic wordmark (white + primary accent) */
const PlaxonicLogo = () => (
  <svg
    width="120"
    height="45"
    viewBox="0 0 144 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <title>Plaxonic</title>
    <path
      d="M96.8111 0L83.9413 11.5346L61.9796 29.7064L48.0214 11.9212L56.0889 10.568L65.5652 22.5537L96.8111 0Z"
      fill="#1ba3dd"
    />
    <path
      d="M97.5794 16.1098C96.811 14.9499 95.8506 14.1122 94.6981 13.5322C93.5456 12.9523 92.0729 12.6945 90.4082 12.6945C88.6794 12.6945 87.2708 12.9523 86.0543 13.5322C84.9017 14.1122 83.8773 14.8854 83.173 16.1098C82.5967 16.8831 82.2766 18.043 82.0205 19.4606C81.8284 20.9427 81.7003 23.1981 81.7003 26.3556C81.7003 29.5131 81.8284 31.7685 82.0205 33.2506C82.2766 34.6683 82.5967 35.8282 83.173 36.6014C83.9413 37.7613 84.9017 38.599 86.0543 39.179C86.1183 39.2434 86.1183 39.2434 86.1183 39.2434C87.2708 39.8234 88.7434 40.0812 90.4082 40.0812C92.0729 40.0812 93.4816 39.8234 94.6341 39.2434C94.6981 39.2434 94.6981 39.2434 94.6981 39.179C95.8506 38.599 96.8751 37.8258 97.5794 36.6014C98.0916 35.8282 98.4758 34.6683 98.7319 33.2506C98.988 31.7685 99.052 29.5131 99.052 26.4201C99.052 23.2625 98.988 21.0072 98.7319 19.5895C98.4758 18.1074 98.0916 16.9475 97.5794 16.1098ZM92.9053 28.6754C92.9053 31.5107 92.7772 33.2506 92.3931 33.9594C92.0089 34.6683 91.3686 34.9905 90.4722 34.9905C89.5118 34.9905 88.8715 34.6683 88.5514 33.9594C88.1672 33.1862 87.9751 31.4463 87.9751 28.6754V23.9714C87.9751 21.136 88.1672 19.3317 88.5514 18.6874C88.8715 17.9785 89.5118 17.6563 90.4722 17.6563C91.4326 17.6563 92.0729 17.9785 92.4571 18.6874C92.7772 19.3317 92.9693 21.136 92.9693 23.9714V28.6754H92.9053Z"
      fill="#FFFFFF"
    />
    <path
      d="M111.538 17.463C111.538 18.8163 111.538 20.4917 111.666 22.4248C111.73 24.358 111.922 26.6778 112.114 29.3843L107.056 13.3389H100.781V39.1146H106.223V34.926C106.223 32.9929 106.159 31.0597 106.095 29.0621C105.967 27 105.775 24.938 105.583 22.8115L110.513 39.1146H116.852V13.3389H111.538V17.463Z"
      fill="#FFFFFF"
    />
    <path
      d="M143.936 29.3198H137.981V30.4797C137.981 32.284 137.853 33.5084 137.405 34.1527C137.021 34.7971 136.445 35.1193 135.484 35.1193C134.524 35.1193 133.819 34.6683 133.499 33.8305C133.115 32.864 132.923 30.4153 132.923 26.42V25.9045C132.923 22.1671 133.051 19.9117 133.499 19.0095C133.819 18.1718 134.524 17.6563 135.484 17.6563C136.381 17.6563 137.021 17.9785 137.405 18.7518C137.789 19.4606 137.981 20.685 137.981 22.4248L143.872 22.4893V22.2315C143.872 19.074 143.168 16.6897 141.759 15.1432C140.286 13.5322 138.237 12.7589 135.42 12.7589C133.755 12.7589 132.347 13.0811 131.194 13.5967C130.042 14.1766 129.017 15.0788 128.377 16.1742C127.801 16.9475 127.481 18.1074 127.225 19.5251C126.968 21.0072 126.904 23.2625 126.904 26.42C126.904 29.5776 126.968 31.8329 127.225 33.315C127.481 34.7327 127.801 35.8926 128.377 36.6659C129.081 37.8258 130.042 38.6635 131.194 39.2434C131.258 39.3079 131.258 39.3079 131.258 39.3079C132.411 39.8878 133.884 40.1456 135.484 40.1456C137.213 40.1456 138.622 39.8878 139.838 39.3079C140.607 38.9212 141.311 38.4702 141.887 37.8258C143.296 36.2792 143.936 33.895 143.936 30.7375C144 30.222 144 29.4487 143.936 29.3198Z"
      fill="#FFFFFF"
    />
    <path d="M125.176 13.3389H119.157V39.1146H125.176V13.3389Z" fill="#FFFFFF" />
    <path
      d="M45.2041 13.3389H37.9689L32.3344 39.1146H38.4811L39.1854 34.3461H43.9235L44.6918 39.1146H50.6465L45.2041 13.3389ZM39.8257 29.7065L41.6185 18.3652L43.3472 29.7065H39.8257Z"
      fill="#FFFFFF"
    />
    <path
      d="M70.3673 16.6253C69.4069 15.0788 68.4464 13.7256 67.422 12.4368C66.1414 13.4034 64.8608 14.4988 63.5162 15.5943C64.4126 17.0764 65.3731 18.4296 66.4616 19.654C67.7421 18.7518 69.0227 17.7208 70.3673 16.6253Z"
      fill="#FFFFFF"
    />
    <path
      d="M13.446 14.6277C12.6776 14.1766 11.8453 13.8544 10.8208 13.6611C9.79635 13.4678 8.19564 13.3389 5.95465 13.3389H0V39.1146H6.0827V29.3843H8.25967C10.8848 29.3843 12.9337 28.7399 14.2783 27.3222C15.6229 25.969 16.3273 23.9714 16.3273 21.3294C16.3273 19.7828 16.0711 18.3652 15.5589 17.2053C15.1107 16.0454 14.4064 15.2077 13.446 14.6277ZM9.54024 23.7781C8.96398 24.358 8.13161 24.6158 6.91507 24.6158C6.72299 24.6158 6.21076 24.6158 6.14673 24.5513V18.043H6.65896C8.00356 18.043 8.96398 18.3007 9.47621 18.8163C10.0525 19.2673 10.3086 19.9762 10.3086 21.0716C10.3086 22.2315 10.0525 23.1981 9.54024 23.7781Z"
      fill="#FFFFFF"
    />
    <path
      d="M23.6265 13.3389H17.6078V39.1146H30.9258V34.0883H23.6265V13.3389Z"
      fill="#FFFFFF"
    />
    <path
      d="M46.6768 44.2697L67.1659 31.7041L76.578 43.6898L84.7097 42.3365L70.6874 24.5513L46.6768 44.2697Z"
      fill="#FFFFFF"
    />
    <path d="M109.617 49.6181V48.8449H107.056V52.5179H109.617V51.8091H107.888V50.9714H109.489V50.327H107.888V49.6181H109.617Z" fill="#FFFFFF" />
    <path d="M102.702 49.6181V52.5179H103.598V49.6181H104.687V48.8449H101.613V49.6181H102.702Z" fill="#FFFFFF" />
    <path d="M95.9786 52.5179H96.811L97.0671 51.8735H98.5398L98.2837 51.2291H97.2592L97.8355 49.5537L98.2837 51.2291L98.5398 51.8735L98.7319 52.5179H99.6283L98.3477 48.8449H97.2592L95.9786 52.5179Z" fill="#FFFFFF" />
    <path d="M92.9053 52.5179L94.1218 48.8449H93.2254L92.329 51.8091L91.4327 48.8449H90.5363L91.6888 52.5179H92.9053Z" fill="#FFFFFF" />
    <path d="M88.2953 49.3604C88.2313 49.2315 88.0392 49.0382 87.7831 48.9737C87.5269 48.8449 87.2708 48.7804 86.8867 48.7804C86.5665 48.7804 86.1823 48.8449 85.9262 48.9737C85.7341 49.0382 85.5421 49.2315 85.478 49.3604C85.414 49.4893 85.35 49.747 85.35 49.9403V51.4224C85.35 51.6802 85.414 51.8735 85.478 52.0024C85.5421 52.1313 85.7341 52.3246 85.9262 52.4535C86.1183 52.5179 86.5025 52.5823 86.8867 52.5823C87.2708 52.5823 87.5269 52.5179 87.7831 52.4535C88.0392 52.3246 88.2313 52.1957 88.2953 52.0024C88.4233 51.8735 88.4233 51.6802 88.4233 51.4224V49.9403C88.4233 49.747 88.3593 49.4893 88.2953 49.3604ZM87.3989 51.7446C87.3349 51.8091 87.0787 51.8735 86.8226 51.8735C86.5665 51.8735 86.3744 51.8091 86.2464 51.7446C86.1823 51.6802 86.1183 51.4869 86.1183 51.358V50.0692C86.1183 49.8759 86.1823 49.747 86.2464 49.6826C86.3104 49.6181 86.5665 49.5537 86.8226 49.5537C87.0787 49.5537 87.2708 49.6181 87.3989 49.6826C87.4629 49.747 87.5269 49.8115 87.5269 50.0692C87.5269 50.327 87.5269 51.1647 87.5269 51.358C87.5269 51.5513 87.5269 51.6802 87.3989 51.7446Z" fill="#FFFFFF" />
    <path d="M67.0378 46.9761H66.4615V54H67.0378V46.9761Z" fill="#FFFFFF" />
    <path d="M70.6874 48.8449H69.791V52.5179H70.6874V48.8449Z" fill="#FFFFFF" />
    <path d="M64.0925 49.6181V48.8449H60.9551V49.6181H62.1076V52.5179H62.94V49.6181H64.0925Z" fill="#FFFFFF" />
    <path d="M57.8177 48.8449V51.4869L56.345 48.8449H55.3206V52.5179H56.1529V49.9403L57.5616 52.5179H58.65V48.8449H57.8177Z" fill="#FFFFFF" />
    <path d="M80.2276 49.9403L81.6363 52.5179H82.7247V48.8449H81.8924V51.4869L80.4837 48.8449H79.4593V52.5179H80.2276V49.9403Z" fill="#FFFFFF" />
    <path d="M75.6176 52.5179H76.7061V48.8449H75.9378V51.4869L74.4651 48.8449H73.4407V52.5179H74.209V49.9403L75.6176 52.5179Z" fill="#FFFFFF" />
    <path d="M39.9538 48.8449H38.8653V52.5179H39.6977V49.9403L41.1703 52.5179H42.2588V48.8449H41.3624V51.4869L39.9538 48.8449Z" fill="#FFFFFF" />
    <path d="M36.1761 48.8449H35.2797V52.5179H36.1761V48.8449Z" fill="#FFFFFF" />
    <path d="M52.7594 52.5179V51.8091H51.0947V50.9714H52.6314V50.327H51.0947V49.6181H52.7594V48.8449H50.1983V52.5179H52.7594Z" fill="#FFFFFF" />
    <path d="M47.1249 48.8449L46.2285 51.8091L45.2681 48.8449H44.4357L45.5882 52.5179H46.8048L47.9573 48.8449H47.1249Z" fill="#FFFFFF" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full">
      {/* CTA banner (hidden by default – remove "hidden" to show) */}
      <div className="relative z-10 hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-primary rounded-2xl py-8 lg:py-10 px-12 lg:px-20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
              <div className="flex items-center gap-6">
                <img
                  src="/Fav-icon-plaxonic-white.svg"
                  alt="Plaxonic"
                  className="w-16 h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide leading-tight">
                  <span className="text-black">Where Innovation</span>
                  <br />
                  <span className="text-white">Meets Excellence</span>
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {BENEFITS.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-white" aria-hidden="true" />
                    <span className="text-white text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="h-12 px-8 bg-white text-primary font-medium border border-white rounded-lg hover:bg-gray-100 transition-colors text-base"
                >
                  Get Started
                </button>
                <button
                  type="button"
                  className="h-12 px-8 bg-[#0369a1] text-white font-medium border border-[#0369a1] rounded-lg hover:bg-[#0284c7] hover:border-[#0284c7] transition-colors text-base"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main link columns */}
      <div className="bg-black pt-16">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-8">
            {/* Tagline */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <p className="text-white text-lg lg:text-xl xl:text-2xl font-bold leading-snug">
                Empowering 
                <br />
                Businesses
                <br />
                to Innovate and Thrive
                <br />
                in the Digital Era.
              </p>
            </div>

            {/* What we do */}
            <div>
              <h3 className="text-primary font-bold text-base mb-6">What we do</h3>
              <ul className="space-y-3">
                {WHAT_WE_DO.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who we serve */}
            <div>
              <h3 className="text-primary font-bold text-base mb-6">Who we serve</h3>
              <ul className="space-y-3">
                {WHO_WE_SERVE.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who we are */}
            <div>
              <h3 className="text-primary font-bold text-base mb-6">Who we are</h3>
              <ul className="space-y-3">
                {WHO_WE_ARE.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights */}
            <div>
              <h3 className="text-primary font-bold text-base mb-6">Insights</h3>
              <ul className="space-y-3">
                {INSIGHTS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h3 className="text-primary font-bold text-base mb-6">Careers</h3>
              <ul className="space-y-3">
                {CAREERS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <PlaxonicLogo />
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative text-sm font-semibold text-white hover:text-primary transition-colors uppercase tracking-wide pb-1"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-medium">Follow us</span>
              <div className="flex items-center space-x-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <SocialIcon name={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright + blurb */}
          <div className="border-t border-gray-800 pt-6 space-y-4">
            <p className="text-sm text-gray-400 leading-tight">
              Plaxonic is a global AI-first engineering and product company that
              helps organizations build intelligent, cloud-native, and
              automation-driven digital systems. With globally distributed
              teams, we modernize enterprises, streamline operations, and
              deliver measurable business impact through production-ready AI,
              enterprise software engineering, and scalable cloud platforms,
              built for scale, delivering real results.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Plaxonic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;