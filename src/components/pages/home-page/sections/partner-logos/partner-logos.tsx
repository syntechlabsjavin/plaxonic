import asusLogo from "../../../../../assets/partner-logos/asus.png";
import zomatoLogo from "../../../../../assets/partner-logos/zomato.png";
import tataLogo from "../../../../../assets/partner-logos/tata-technologies.png";
import aldLogo from "../../../../../assets/partner-logos/ald-automotive.png";
import pioneerLogo from "../../../../../assets/partner-logos/pioneer.png";
import doubleTreeLogo from "../../../../../assets/partner-logos/doubletree-hilton.png";

interface Partner {
  name: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  { name: "ASUS", logo: asusLogo },
  { name: "Zomato", logo: zomatoLogo },
  { name: "TATA Technologies", logo: tataLogo },
  { name: "ALD Automotive", logo: aldLogo },
  { name: "Pioneer", logo: pioneerLogo },
  { name: "DoubleTree by Hilton", logo: doubleTreeLogo },
];

const PartnerLogos = () => {
  return (
    <section className="bg-white pt-0 lg:pt-2 pb-8 lg:pb-10">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mb-8 sm:mb-12 lg:mb-14">
        <p className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase text-center">
          Partnering with the world&apos;s most innovative companies to deliver
          transformative solutions
        </p>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <ul className="flex flex-wrap items-center justify-center gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-y-0">
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="basis-1/3 md:basis-1/6 lg:basis-0 lg:flex-1 flex items-center justify-center"
            >
              <div className="flex items-center justify-center h-20 px-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="object-contain max-w-[108px] max-h-[52px] grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnerLogos;