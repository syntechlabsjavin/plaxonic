import { useState } from "react";
import { Mail } from "lucide-react";

interface Office {
  city: string;
  address: string;
  email: string;
}

interface CountryGroup {
  id: string;
  label: string;
  offices: Office[];
}

const LOCATIONS: CountryGroup[] = [
  {
    id: "india",
    label: "INDIA",
    offices: [
      {
        city: "Delhi/NCR",
        address: "B-10, Sector 59, Noida, Uttar Pradesh, 201301, India",
        email: "contact@plaxonic.com",
      },
      {
        city: "Palampur",
        address:
          "Banuri, Mandi - Pathankot Rd, Palampur, Himachal Pradesh 176062, India",
        email: "contact@plaxonic.com",
      },
    ],
  },
  {
    id: "netherlands",
    label: "NETHERLANDS",
    offices: [
      {
        city: "Amsterdam",
        address:
          "Diana & Vesta, Herikerbergweg 292 - 342, Amsterdam 1101 CT, Netherlands",
        email: "contact@plaxonic.com",
      },
    ],
  },
  {
    id: "uae",
    label: "UAE",
    offices: [
      {
        city: "Dubai",
        address:
          "Techno Hub - 2, 2nd Floor, 230 - Nadd Hessa, Dubai Silicon Oasis, Dubai, United Arab Emirates",
        email: "contact@plaxonic.com",
      },
    ],
  },
  {
    id: "usa",
    label: "USA",
    offices: [
      {
        city: "Middletown, DE",
        address: "651 N Broad St #206, Middletown, DE 19709, United States",
        email: "contact@plaxonic.com",
      },
    ],
  },
];

const LocationsSection=()=> {
  const [active, setActive] = useState("india");

  const activeGroup =
    LOCATIONS.find((g) => g.id === active) ?? LOCATIONS[0];

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Where We Are
            </span>
          </div>

          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05]">
            Our Locations
          </h2>

          {/* Country tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            {LOCATIONS.map((group, i) => (
              <div key={group.id} className="flex items-center gap-x-5">
                <button
                  type="button"
                  onClick={() => setActive(group.id)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    active === group.id
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {group.label}
                </button>
                {i < LOCATIONS.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Office cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {activeGroup.offices.map((office) => (
            <div
              key={office.city}
              className="border border-gray-200 bg-white p-7"
            >
              <span className="inline-flex items-center bg-primary text-white text-sm font-semibold px-4 py-1.5 mb-5">
                {office.city}
              </span>

              <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 min-h-[2.75rem]">
                {office.address}
              </p>

              <a
                href={`mailto:${office.email}`}
                className="inline-flex items-center gap-2 text-gray-700 text-sm hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                {office.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationsSection;