
type ERPPlatform = {
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  logoAlt?: string;
  custom?: boolean;
};
import sapLogo from "../../../../../../../assets/what-we-do/logo-sap.svg";
import netSuiteLogo from "../../../../../../../assets/what-we-do/logo-netsuite.svg";
import dynamics365Logo from "../../../../../../../assets/what-we-do/logo-dynamics365.svg";
import odooLogo from "../../../../../../../assets/what-we-do/logo-odoo.svg";
import acumaticaLogo from "../../../../../../../assets/what-we-do/logo-acumatica.svg";

const platforms: ERPPlatform[] = [
  {
    name: "SAP S/4HANA",
    tagline: "Enterprise-grade + global scale",
    description:
      "Real-time ERP for complex, multinational operations—Fiori UX, embedded analytics, and process depth for the largest enterprises.",
    logo: sapLogo,
    logoAlt: "SAP S/4HANA logo",
  },
  {
    name: "Oracle NetSuite",
    tagline: "Cloud-native + mid-market",
    description:
      "A single cloud suite for finance, inventory, and operations—fast to deploy and built to scale with growing businesses.",
    logo: netSuiteLogo,
    logoAlt: "Oracle NetSuite logo",
  },
  {
    name: "Dynamics 365",
    tagline: "Finance + Operations",
    description:
      "Microsoft's ERP wired natively into Power Platform, Teams, and Azure—ideal where the Microsoft stack already runs the business.",
    logo: dynamics365Logo,
    logoAlt: "Dynamics 365 logo",
  },
  {
    name: "Odoo",
    tagline: "Open-source + modular",
    description:
      "An app-by-app ERP you adopt at your own pace—cost-effective, highly customizable, and friendly to lean teams.",
    logo: odooLogo,
    logoAlt: "Odoo logo",
  },
  {
    name: "Acumatica",
    tagline: "Flexible cloud ERP",
    description:
      "Consumption-based licensing and a true cloud architecture for distribution, manufacturing, and field-service operations.",
    logo: acumaticaLogo,
    logoAlt: "Acumatica logo",
  },
  {
    name: "Custom ERP",
    tagline: "When the process is the edge",
    description:
      "A bespoke platform engineered around your exact operating model—when no off-the-shelf suite fits how you really run.",
    custom: true,
  },
];

const ERPPlatforms = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Platforms We Implement
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            Platform-Agnostic,{" "}
            <span className="text-gray-300">
              Outcome-Obsessed
            </span>
            .
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              We're not tied to one vendor. We help you choose the ERP
              that fits your industry, budget, and roadmap—then
              implement it like specialists.
            </p>
          </div>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {platforms.map((platform) => (
            <article
              key={platform.name}
              className="group relative overflow-hidden border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8"
            >
              {/* Platform logo */}
              <div className="mb-6 flex h-12 items-start">
                {platform.custom ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 transition-colors duration-300 group-hover:bg-primary">
                    <span className="font-inter text-lg font-bold tracking-tight text-white">
                      {"{ }"}
                    </span>
                  </div>
                ) : (
                  <img
                    src={platform.logo}
                    alt={platform.logoAlt}
                    loading="lazy"
                    className="h-full w-auto max-w-[170px] object-contain object-left"
                  />
                )}
              </div>

              {/* Platform information */}
              <h3 className="mb-1 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                {platform.name}
              </h3>

              <div className="mb-4 text-xs font-medium uppercase tracking-wide text-primary">
                {platform.tagline}
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                {platform.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPPlatforms;
