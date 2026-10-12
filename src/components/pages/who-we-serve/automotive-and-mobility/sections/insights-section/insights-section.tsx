import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type Tag = {
  label: string;
  href: string;
};

type Insight = {
  type: "Blog" | "News";
  href: string;
  image: string;
  imageAlt: string;
  tags: Tag[];
  title: string;
  excerpt: string;
};

const INSIGHTS: Insight[] = [
  {
    type: "Blog",
    href: "/insights/blog/2026-web-design-trends",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785844456/plaxonic/insights/qszsbkaay43fe9aiz7no.png",
    imageAlt:
      "Which 2026 Web Design Trends Are Worth Adopting, and Which Aren't",
    tags: [
      { label: "Web Design", href: "/web-design/blog" },
      { label: "UX/UI Design", href: "/ux-ui-design/blog" },
      { label: "Frontend", href: "/frontend/blog" },
    ],
    title: "Which 2026 Web Design Trends Are Worth Adopting, and Which Aren't",
    excerpt:
      "Most trend roundups list a dozen ideas and commit to none. A verdict-driven guide to 2026 web design trends: bento grids and performance to adopt now, brutalism and dopamine color as it-depends, and self-adapting AI interfaces to skip.",
  },
  {
    type: "News",
    href: "/insights/newsroom/plaxonic-launches-limsera-ai-powered-lims-for-every-lab",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1786018125/plaxonic/newsroom/newsroom-limsera-launch.webp",
    imageAlt:
      "Plaxonic Launches LIMSera, an AI-Powered Laboratory Information Management System for Every Lab",
    tags: [
      { label: "Press Release", href: "/press-release/newsroom" },
      { label: "Product Launch", href: "/product-launch/newsroom" },
      { label: "AI", href: "/ai/newsroom" },
    ],
    title:
      "Plaxonic Launches LIMSera, an AI-Powered Laboratory Information Management System for Every Lab",
    excerpt:
      "An industry-agnostic, IS/IEC 17025-ready LIMS platform, available as SaaS or self-hosted, bringing intelligent automation to laboratories across sectors.",
  },
  {
    type: "Blog",
    href: "/insights/blog/ai-productivity-paradox",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785844457/plaxonic/insights/ry8nittl4eyjckftxhoo.png",
    imageAlt:
      "The AI Productivity Paradox: Why Adoption is Up, and Output is Not",
    tags: [
      { label: "Artificial Intelligence", href: "/artificial-intelligence/blog" },
      { label: "Enterprise Strategy", href: "/enterprise-strategy/blog" },
    ],
    title:
      "The AI Productivity Paradox: Why Adoption is Up, and Output is Not",
    excerpt:
      "Nearly every company has adopted AI, yet few can point to what it changed. The AI productivity paradox — adoption is up, output is flat — and why the companies pulling ahead are the ones redesigning work instead of bolting AI onto it.",
  },
  {
    type: "News",
    href: "/insights/newsroom/plaxonic-opens-a-state-of-the-art-development-centre-in-the-himalayas",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1786018122/plaxonic/newsroom/newsroom-himalayas-dev-centre.webp",
    imageAlt:
      "Plaxonic Opens a State-of-the-Art Development Centre in the Himalayas",
    tags: [
      { label: "Press Release", href: "/press-release/newsroom" },
      { label: "Company News", href: "/company-news/newsroom" },
      { label: "Sustainability", href: "/sustainability/newsroom" },
    ],
    title:
      "Plaxonic Opens a State-of-the-Art Development Centre in the Himalayas",
    excerpt:
      "Expands Presence in Palampur, Himachal Pradesh: Creating Opportunities, Fostering Work-Life Balance, Giving Back to the Society, and Sustainability.",
  },
  {
    type: "Blog",
    href: "/insights/blog/preemptive-cybersecurity",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785844458/plaxonic/insights/h4xvi6ahose9hm7nica6.png",
    imageAlt:
      "Preemptive Cybersecurity: Why Reacting to Threats Is No Longer Enough",
    tags: [
      { label: "Cybersecurity", href: "/cybersecurity/blog" },
      { label: "Artificial Intelligence", href: "/artificial-intelligence/blog" },
      { label: "DevOps", href: "/devops/blog" },
    ],
    title:
      "Preemptive Cybersecurity: Why Reacting to Threats Is No Longer Enough",
    excerpt:
      "Detect-and-respond was built for attacks slow enough for humans to catch. AI broke that assumption. Preemptive cybersecurity — Gartner's Deny, Deceive, Disrupt — is about stopping attacks before they start, and it lands squarely on engineering teams.",
  },
  {
    type: "Blog",
    href: "/insights/blog/ai-vs-ml-vs-deep-learning-explained",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1785844460/plaxonic/insights/yfnu9siyfcddjai7sqfp.png",
    imageAlt:
      "The Difference Between AI, ML, and Deep Learning, Explained in Plain English",
    tags: [
      { label: "Artificial Intelligence", href: "/artificial-intelligence/blog" },
      { label: "Machine Learning", href: "/machine-learning/blog" },
      { label: "Deep Learning", href: "/deep-learning/blog" },
    ],
    title:
      "The Difference Between AI, ML, and Deep Learning, Explained in Plain English",
    excerpt:
      "AI, machine learning, and deep learning are not competing technologies — they are three nesting levels of one field. A plain-English guide to the hierarchy, and why the distinction matters when you approve a budget, read a vendor proposal, or decide what to build.",
  },
];

const GAP_REM = 3; // matches the gap used in the track

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

const InsightsSection = () => {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, INSIGHTS.length - visibleCount);
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Keep index in bounds when visibleCount changes (e.g. resize)
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  // Translate by one card + gap per step
  const translateX = `calc(-${index} * (100% / ${visibleCount} + ${GAP_REM}rem / ${visibleCount} * ${visibleCount - 1} / ${visibleCount}) - ${index * 0}rem)`;
  // Simpler, reliable approach: each card is (100% / visibleCount - gap adjustment)
  // We'll use a percentage of the track based on item width.

  const itemWidthPercent = 100 / visibleCount;
  // gap is 3rem between items; we need to account for it in the transform.
  // translateX = -(index * (itemWidth + gap))
  // Using CSS: each item has width calc((100% - (n-1)*gap) / n)
  // For simplicity and matching the original layout:

  return (
    <section
      className="w-full bg-white py-16 sm:py-20 lg:py-28"
      style={{ contain: "paint" }}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                The Latest
              </span>
            </div>
            <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Our <span className="text-primary">Insights</span>.
            </h2>
          </div>

          <div className="mb-2">
            <a
              href="/insights"
              className="group inline-flex items-center gap-2 px-6 py-3 lg:px-5 lg:py-2.5 2xl:px-6 2xl:py-3 border border-[#1a1f35] text-[#1a1f35] font-semibold text-sm lg:text-[13px] 2xl:text-sm uppercase tracking-wider hover:bg-[#1a1f35] hover:text-white transition-colors duration-300"
            >
              View All Insights
              <ArrowUpRight
                className="w-4 h-4 lg:w-[15px] lg:h-[15px] 2xl:w-4 2xl:h-4 group-hover:rotate-45 transition-transform duration-300"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Subcopy */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-8 mb-12">
          <div className="flex gap-4 max-w-2xl">
            <div className="w-[3px] bg-primary flex-shrink-0" />
            <p className="text-gray-600 text-base md:text-lg lg:text-base 2xl:text-lg">
              Expert perspectives on technology trends, industry best practices,
              and digital innovation shaping the future of business.
            </p>
          </div>
        </div>

        {/* Cards carousel */}
        <div className="relative -mx-1">
          <div className="overflow-hidden px-1">
            <div
              ref={trackRef}
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{
                gap: `${GAP_REM}rem`,
                willChange: "transform",
                backfaceVisibility: "hidden",
                // Move by one card width + gap per step
                transform: `translateX(calc(-${index} * ((100% - ${(visibleCount - 1) * GAP_REM}rem) / ${visibleCount} + ${GAP_REM}rem)))`,
              }}
            >
              {INSIGHTS.map((insight) => (
                <div
                  key={insight.href}
                  className="flex-shrink-0 self-stretch"
                  style={{
                    width: `calc((100% - ${(visibleCount - 1) * GAP_REM}rem) / ${visibleCount})`,
                  }}
                >
                  <a className="h-full block" href={insight.href}>
                    <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col cursor-pointer">
                      <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out z-10" />

                      <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                        <img
                          src={insight.image}
                          alt={insight.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-white bg-primary">
                            {insight.type}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 lg:p-6 2xl:p-8 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-3 min-h-[32px]">
                          {insight.tags.map((tag) => (
                            <a
                              key={tag.href}
                              href={tag.href}
                              className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {tag.label}
                            </a>
                          ))}
                        </div>

                        <h3 className="text-xl lg:text-xl 2xl:text-2xl font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors min-h-[50px] leading-tight">
                          {insight.title}
                        </h3>

                        <p className="text-gray-600 text-[18px] lg:text-[15px] 2xl:text-[18px] leading-relaxed line-clamp-3 mb-4 flex-grow">
                          {insight.excerpt}
                        </p>

                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn mt-auto">
                          Read more
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:-rotate-45"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-end gap-2 mt-10">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canPrev}
              aria-label="Previous insights"
              className={`w-12 h-12 flex items-center justify-center bg-primary text-white transition-all duration-300 ${
                canPrev
                  ? "hover:bg-primary-dark cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canNext}
              aria-label="Next insights"
              className={`w-12 h-12 flex items-center justify-center bg-primary text-white transition-all duration-300 ${
                canNext
                  ? "hover:bg-primary-dark cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;