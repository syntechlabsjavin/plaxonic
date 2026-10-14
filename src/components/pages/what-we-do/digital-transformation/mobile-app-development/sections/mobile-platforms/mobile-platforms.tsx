import {
  AppWindow,
  Smartphone,
  Layers,
  Globe,
  Watch,
} from "lucide-react";
import iosPlatformImage from "../../../../../../../assets/mobile-application-development/platforms-card1.png";
import androidPlatformImage from "../../../../../../../assets/mobile-application-development/platforms-card2.png";
import crossPlatformImage from "../../../../../../../assets/mobile-application-development/platforms-card5.png";
import pwaPlatformImage from "../../../../../../../assets/mobile-application-development/platforms-card3.png";
import wearablePlatformImage from "../../../../../../../assets/mobile-application-development/platforms-card4.png";

const mobilePlatforms = [
  {
    title: "Android Application Development",
    description:
      "We build high-performance native Android apps with Kotlin and Jetpack Compose. We design them for the full range of Android devices.",
    image: androidPlatformImage,
    imageAlt: "Android Application Development",
    Icon: Smartphone,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Our cross-platform mobile app development services use React Native and Flutter to deliver native-grade performance with a shared codebase and faster time to market.",
    image: crossPlatformImage,
    imageAlt: "Cross-Platform App Development",
    Icon: Layers,
  },
  {
    title: "Progressive Web Apps (PWAs)",
    description:
      "App-like web experiences with offline capability, push notifications, and near-native performance across devices.",
    image: pwaPlatformImage,
    imageAlt: "Progressive Web Apps (PWAs)",
    Icon: Globe,
  },
  {
    title: "Wearable App Development",
    description:
      "Connected experiences for watchOS and Wear OS, with real-time sync, glanceable interfaces, and health integration.",
    image: wearablePlatformImage,
    imageAlt: "Wearable App Development",
    Icon: Watch,
  },
];

const MobilePlatforms = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="relative mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Platforms
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl leading-[1.1] font-bold tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
              Platforms We Build{" "}
              <span className="text-gray-300">
                Mobile Applications For
              </span>
              .
            </h2>

            <div className="flex gap-4">
              <div className="w-[3px] shrink-0 bg-primary" />

              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                We build mobile applications across leading platforms and
                choose the right development approach based on your performance
                needs, timeline, and budget. We build for every ecosystem
                through native apps and cross-platform mobile app development.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Featured iOS Card */}
          <div className="group relative overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:col-span-5 lg:p-10">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-[90px]" />

            <div className="relative flex flex-col gap-8">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <AppWindow className="h-6 w-6" />
                </div>

                <h3 className="font-inter text-xl leading-snug font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                  iOS Application Development
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 lg:text-base">
                  Pixel-perfect native iOS apps built with Swift and SwiftUI,
                  optimized for the Apple ecosystem and seamless device
                  integration.
                </p>
              </div>

              <div className="relative mx-auto mt-4 flex w-full max-w-[540px] justify-center transition-transform duration-500 group-hover:scale-[1.04] lg:mt-6">
                <img
                  src={iosPlatformImage}
                  alt="iOS application example with App Store rating, secure authentication and performance metrics"
                  loading="lazy"
                  className="h-auto w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Other Platform Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
            {mobilePlatforms.map(
              ({ title, description, image, imageAlt, Icon }) => (
                <div
                  key={title}
                  className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.06] lg:p-8"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Card Content */}
                  <h3 className="mb-2.5 text-lg leading-snug font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary lg:text-xl">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {description}
                  </p>

                  {/* Platform Image */}
                  <div className="relative mt-6 -mx-7 -mb-7 h-52 overflow-hidden lg:-mx-8 lg:-mb-8">
                    <div className="relative flex h-full items-end justify-center">
                      <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        className="h-auto max-h-full w-auto max-w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  {/* Hover Bottom Border */}
                  <span className="absolute right-0 bottom-0 left-0 z-10 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePlatforms;