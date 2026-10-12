import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    tag: "Data & Interoperability",
    title: "Clinical Data Platforms on FHIR",
    description:
      "One real-time patient record built from EHR, LIS, PACS, connected devices, and claims data, normalized on HL7 FHIR. The complete patient history is available in a single view when it is needed.",
    href: "/services/data-science-analytics",
  },
  {
    tag: "Clinical AI",
    title: "Decision Support Clinicians Can Verify",
    description:
      "Clinical decision support and discovery models that remain explainable and keep a clinician in review. Every output can be questioned by a physician and audited by a regulator, with the reasoning behind it available.",
    href: "/services/machine-learning",
  },
  {
    tag: "Computer Vision",
    title: "Medical Imaging and Diagnostics",
    description:
      "Vision models that identify findings across radiology, pathology, and screening workflows, integrated into existing clinical processes and validated against the standard of care rather than benchmark performance alone.",
    href: "/services/computer-vision",
  },
  {
    tag: "Digital Health",
    title: "Telehealth and Patient Apps",
    description:
      "Virtual care platforms, remote monitoring, and patient-facing applications that extend care between appointments, built for sustained daily use and for the patients least comfortable with technology.",
    href: "/services/custom-application-development",
  },
  {
    tag: "Security & Compliance",
    title: "HIPAA-Grade Security By Design",
    description:
      "HIPAA, GDPR, and GxP requirements built into the architecture at the design stage, with zero-trust access control, encryption at rest and in transit, and audit trails that document how and why every action occurred.",
    href: "/services/cybersecurity",
  },
  {
    tag: "Cloud & Platform",
    title: "Compliant Cloud for Healthcare",
    description:
      "Scalable, resilient cloud infrastructure built for continuous clinical uptime and life sciences workloads, so systems remain fast, available, and demonstrably secure under sustained load.",
    href: "/services/cloud-infrastructure-management",
  },
] as const;

const WhatWeBuild = () => {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              What We Build
            </span>
          </div>
          <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
            Systems We Build For Healthcare And{" "}
            <span className="text-primary">Life Sciences</span>.
          </h2>
          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We build across care delivery and research, covering clinical data
              infrastructure, applied AI, patient-facing products, and the
              secure cloud platforms underneath them.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden border border-gray-200 bg-white p-7 lg:p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <span className="inline-flex self-start bg-primary px-3 py-1 text-white text-xs font-medium uppercase tracking-wider mb-5">
                {service.tag}
              </span>

              <h3 className="font-inter text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-primary">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Explore
                </span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>

              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;