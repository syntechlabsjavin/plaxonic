
const platforms = [
  {
    name: "Salesforce",
    logo: "/src/assets/what-we-do/logo-salesforce.svg",
    alt: "Salesforce logo",
    category: "Sales Cloud + Service Cloud",
    description:
      "We help you implement and customize Salesforce around your sales, customer management, and business processes. You can connect the platform to your existing systems, automate workflows, and configure it to support how your teams work.",
  },
  {
    name: "HubSpot",
    logo: "/src/assets/what-we-do/logo-hubspot.svg",
    alt: "HubSpot logo",
    category: "Marketing + Sales + Service Hubs",
    description:
      "Our engineering team helps you set up and customize HubSpot for sales, marketing, and customer relationship management. After the integration, your team can manage contacts, track deals, automate routine activities, and connect customer interactions across the business.",
  },
  {
    name: "Zoho CRM",
    logo: "/src/assets/what-we-do/logo-zoho.svg",
    alt: "Zoho CRM logo",
    category: "Cost-effective + flexible",
    description:
      "We customize Zoho CRM to fit your sales process, customer data, workflows, and reporting needs. Our team also connects it with other business applications so your teams can manage relevant information within a connected CRM environment.",
  },
  {
    name: "Pipedrive",
    logo: "/src/assets/what-we-do/logo-pipedrive.svg",
    alt: "Pipedrive logo",
    category: "Sales-first + lightweight",
    description:
      "We configure Pipedrive around your sales pipeline and day-to-day sales activities. You can organize leads and deals, automate repetitive tasks, track interactions, and give your sales team a clearer view of active opportunities.",
  },
  {
    name: "Microsoft Dynamics 365",
    logo: "/src/assets/what-we-do/logo-dynamics365.svg",
    alt: "Microsoft Dynamics 365 logo",
    category: "Deep Microsoft integration",
    description:
      "To support your customer management and business operations, we implement and customize Microsoft Dynamics 365 for your business needs. We can configure workflows, connect business systems, and adapt the CRM environment to your organization's processes and requirements.",
  },
  {
    name: "Custom CRM",
    logo: null,
    alt: "",
    category: "When nothing off-the-shelf fits",
    description:
      "When existing platforms don't match your business requirements, we develop a custom CRM solution around your processes. You can define workflows, features, integrations, user roles, and data structures based on how your business operates.",
  },
];

const CRMPlatforms = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <div
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Platforms We Master
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            CRM Platforms We{" "}
            <span className="text-gray-300">Work With</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              We help you choose and customize the CRM software that fits
              your business requirements. Our CRM solutions can support
              different business processes, integrations, and workflows,
              with custom CRM development software solutions available when
              your requirements go beyond standard platform capabilities.
            </p>
          </div>
        </div>

        {/* Platform Cards */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          style={{ opacity: 1 }}
        >
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group relative overflow-hidden border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8"
              style={{ opacity: 1, transform: "none" }}
            >
              {/* Platform Logo */}
              <div className="mb-6 flex items-start">
                <div className="flex h-12 items-center">
                  {platform.logo ? (
                    <img
                      src={platform.logo}
                      alt={platform.alt}
                      className="h-full w-auto max-w-[170px] object-contain object-left"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 transition-colors duration-300 group-hover:bg-primary">
                      <span className="font-inter text-lg font-bold tracking-tight text-white">
                        {"{ }"}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Platform Name */}
              <h3 className="mb-1 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                {platform.name}
              </h3>

              {/* Platform Category */}
              <div className="mb-4 text-xs font-medium uppercase tracking-wide text-primary">
                {platform.category}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {platform.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMPlatforms;
