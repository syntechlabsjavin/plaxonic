import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CodeXml, Database, Cloud, ShieldCheck } from "lucide-react";
import javaLogo from "../../../../../../../assets/what-we-do/java.svg";
import dotnetLogo from "../../../../../../../assets/what-we-do/dotnet.svg";
import pythonLogo from "../../../../../../../assets/what-we-do/python.svg";
import nodejsLogo from "../../../../../../../assets/what-we-do/nodejs.svg";
import goLogo from "../../../../../../../assets/what-we-do/go.svg";
import reactLogo from "../../../../../../../assets/what-we-do/react.svg";
import angularLogo from "../../../../../../../assets/what-we-do/angular.svg";
import typescriptLogo from "../../../../../../../assets/what-we-do/typescript.svg";

import postgresqlLogo from "../../../../../../../assets/what-we-do/postgresql.svg";
import mysqlLogo from "../../../../../../../assets/what-we-do/mysql.svg";
import mongodbLogo from "../../../../../../../assets/what-we-do/mongodb.svg";
import redisLogo from "../../../../../../../assets/what-we-do/redis.svg";
import kafkaLogo from "../../../../../../../assets/what-we-do/kafka.svg";
import graphqlLogo from "../../../../../../../assets/what-we-do/graphql.svg";

import awsLogo from "../../../../../../../assets/what-we-do/aws.svg";
import azureLogo from "../../../../../../../assets/what-we-do/azure.svg";
import gcpLogo from "../../../../../../../assets/what-we-do/gcp.svg";
import dockerLogo from "../../../../../../../assets/what-we-do/docker.svg";
import kubernetesLogo from "../../../../../../../assets/what-we-do/kubernetes.svg";

import oauthLogo from "../../../../../../../assets/what-we-do/oauth.svg";
import openidLogo from "../../../../../../../assets/what-we-do/openid.svg";
import owaspLogo from "../../../../../../../assets/what-we-do/owasp.svg";

gsap.registerPlugin(ScrollTrigger);

const technologyGroups = [
  {
    title: "Languages & frameworks",
    icon: CodeXml,
    technologies: [
      { name: "Java", logo: javaLogo },
      { name: ".NET", logo: dotnetLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Node.js", logo: nodejsLogo },
      { name: "Go", logo: goLogo },
      { name: "React", logo: reactLogo },
      { name: "Angular", logo: angularLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Data & integration",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", logo: postgresqlLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Redis", logo: redisLogo },
      { name: "Kafka", logo: kafkaLogo },
      { name: "REST" },
      { name: "GraphQL", logo: graphqlLogo },
      { name: "Event-driven architecture" },
    ],
  },
  {
    title: "Cloud & delivery",
    icon: Cloud,
    technologies: [
      { name: "AWS", logo: awsLogo },
      { name: "Azure", logo: azureLogo },
      { name: "Google Cloud", logo: gcpLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
      { name: "CI/CD" },
      { name: "Infrastructure as code" },
    ],
  },
  {
    title: "Security & standards",
    icon: ShieldCheck,
    technologies: [
      { name: "OAuth 2.0", logo: oauthLogo },
      { name: "OIDC", logo: openidLogo },
      { name: "Role-based access control" },
      { name: "Encryption" },
      {
        name: "OWASP-aligned practices",
        logo: owaspLogo,
      },
      { name: "SOC 2" },
      { name: "GDPR" },
      { name: "HIPAA readiness" },
    ],
  },
];

const TechnologyStandards = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Section heading
        gsap.from(".tech-heading", {
          autoAlpha: 0,
          y: 35,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tech-heading",
            start: "top 85%",
            once: true,
          },
        });

        // Category cards
        gsap.from(".tech-card", {
          autoAlpha: 0,
          y: 35,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 82%",
            once: true,
          },
        });

        // Technology chips appear sequentially inside each card
        section.querySelectorAll(".tech-card").forEach((card) => {
          const chips = card.querySelectorAll(".tech-chip");

          gsap.from(chips, {
            autoAlpha: 0,
            y: 12,
            duration: 0.4,
            stagger: 0.045,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          });
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="tech-heading mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Technology &amp; Standards
            </span>
          </div>

          <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            The Stack Behind{" "}
            <span className="text-gray-300">Enterprise-Grade Software</span>.
          </h2>

          <div className="flex gap-4">
            <div className="w-[3px] flex-shrink-0 bg-primary" />

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Enterprise software is judged on how well it holds up under load,
              audit, and time. These are the technologies and standards our
              teams build with every day.
            </p>
          </div>
        </div>

        {/* Technology categories */}
        <div className="tech-grid grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 md:grid-cols-2">
          {technologyGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="tech-card bg-white p-6 sm:p-8 lg:p-10"
              >
                <div className="mb-7 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gray-500" strokeWidth={1.5} />

                  <h3 className="font-inter text-lg font-bold text-gray-900">
                    {group.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="tech-chip inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                    >
                      {technology.logo && (
                        <img
                          src={technology.logo}
                          alt={`${technology.name} logo`}
                          loading="lazy"
                          className="h-[18px] w-[18px] flex-shrink-0 object-contain"
                        />
                      )}

                      {technology.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStandards;
