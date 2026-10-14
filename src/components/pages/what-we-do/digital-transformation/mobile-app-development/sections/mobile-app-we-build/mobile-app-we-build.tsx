
import {
  Smartphone,
  CalendarClock,
  Users,
  Truck,
  Dumbbell,
  Plane,
  Landmark,
  Wallet,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Clapperboard,
  Building2,
  ShieldCheck,
  Wrench,
  RefreshCw,
  KeyRound,
  Briefcase,
  Radio,
  Cpu,
  Glasses,
  MapPin,
  Mic,
  ArrowUpRight,
} from "lucide-react";

import appbuild1 from "../../../../../../../assets/mobile-application-development/appbuild1.png";
import appbuild2 from "../../../../../../../assets/mobile-application-development/appbuild2.png";
import appbuild3 from "../../../../../../../assets/mobile-application-development/appbuild3.png";
import appbuild4 from "../../../../../../../assets/mobile-application-development/appbuild4.png";

const applicationCategories = [
  {
    number: "01",
    title: "Consumer & On-Demand Apps",
    description:
      "Engaging, high-retention apps designed for everyday use and growth.",
    image: appbuild1,
    imageAlt: "Consumer and on-demand application development",
    Icon: Smartphone,
    items: [
      { label: "Booking and On-Demand Apps", Icon: CalendarClock },
      { label: "Social and Community Apps", Icon: Users },
      { label: "Food Delivery and Logistics Apps", Icon: Truck },
      { label: "Lifestyle, Fitness, and Wellness Apps", Icon: Dumbbell },
      { label: "Travel and Hospitality Apps", Icon: Plane },
    ],
  },
  {
    number: "02",
    title: "Industry & Transactional Apps",
    description:
      "Secure, reliable applications tailored to industry-specific needs.",
    image: appbuild3,
    imageAlt: "Industry and transactional application development",
    Icon: Landmark,
    items: [
      { label: "Fintech, Banking, and Digital Wallet Apps", Icon: Wallet },
      { label: "Healthcare and Telemedicine Apps", Icon: Stethoscope },
      { label: "E-Commerce and M-Commerce Apps", Icon: ShoppingCart },
      { label: "EdTech and E-Learning Apps", Icon: GraduationCap },
      {
        label: "Media, Streaming, and Entertainment Apps",
        Icon: Clapperboard,
      },
    ],
  },
  {
    number: "03",
    title: "Enterprise Mobile Solutions",
    description:
      "Secure and manageable mobile solutions that empower your workforce.",
    image: appbuild4,
    imageAlt: "Enterprise mobile application solutions",
    Icon: Building2,
    items: [
      { label: "MDM-Ready Enterprise Apps", Icon: ShieldCheck },
      { label: "Field-Service and Workforce Apps", Icon: Wrench },
      { label: "Offline-First and Sync-Enabled Apps", Icon: RefreshCw },
      { label: "SSO and Role-based Access", Icon: KeyRound },
      { label: "Internal Tools and Employee Apps", Icon: Briefcase },
    ],
  },
  {
    number: "04",
    title: "Connected & Emerging Experiences",
    description:
      "Next-generation mobile experiences for connected devices and emerging technology.",
    image: appbuild2,
    imageAlt: "Connected devices and emerging mobile technologies",
    Icon: Radio,
    items: [
      { label: "IoT and Connected-Device Apps", Icon: Cpu },
      { label: "AR/VR Experiences", Icon: Glasses },
      { label: "Real-Time and Location-based Apps", Icon: MapPin },
      { label: "Voice and Conversational Interfaces", Icon: Mic },
    ],
  },
];

const MobileAppWeBuild = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                What We Build
              </span>
            </div>

            <h2 className="font-inter text-3xl leading-[1.12] font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Mobile Applications We{" "}
              <span className="text-gray-300">Develop For You.</span>
            </h2>
          </div>

          <div className="flex max-w-xl gap-4 lg:mb-2 lg:shrink-0 lg:pl-6">
            <div className="w-[3px] shrink-0 bg-primary" />

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              From consumer apps to enterprise solutions, we build secure,
              scalable mobile applications tailored to your industry's needs
              and your users' expectations.
            </p>
          </div>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          {applicationCategories.map(
            ({
              number,
              title,
              description,
              image,
              imageAlt,
              Icon,
              items,
            }) => (
              <article
                key={number}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-gray-900/[0.06] sm:flex-row"
              >
                {/* Main Content */}
                <div className="relative z-[1] flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:p-7 xl:p-8">
                  {/* Number and Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <span className="font-inter text-sm font-semibold tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-primary">
                      {number}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="mb-5">
                    <h3 className="font-inter text-xl leading-snug font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl xl:text-2xl">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>

                  {/* List */}
                  <ul className="mt-auto border-t border-gray-100 pt-2">
                    {items.map(({ label, Icon: ItemIcon }) => (
                      <li
                        key={label}
                        className="group/item flex items-start gap-3 py-2.5"
                      >
                        <ItemIcon className="mt-0.5 h-[17px] w-[17px] shrink-0 text-gray-400 transition-colors duration-300 group-hover/item:text-primary" />

                        <span className="text-[13px] leading-5 font-medium text-gray-600 transition-colors duration-300 group-hover/item:text-gray-900 sm:text-sm">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Small Decorative Accent */}
                  <div className="absolute right-0 bottom-0 left-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </div>

                {/* Image Panel */}
                <div className="relative h-52 shrink-0 overflow-hidden bg-[#0b0f17] sm:h-auto sm:min-h-full sm:w-[36%] lg:w-[34%] xl:w-[37%]">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent sm:bg-gradient-to-l sm:from-transparent sm:via-transparent sm:to-black/10" />

                  {/* Image Number */}
                  <span className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-semibold text-white backdrop-blur-sm">
                    {number}
                  </span>

                  {/* Corner Detail */}
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default MobileAppWeBuild;
