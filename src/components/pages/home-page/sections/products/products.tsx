/* -------------------------------------------------------------------------- */
/* Imports                                                                    */
/* -------------------------------------------------------------------------- */

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface Product {
  name: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  buttonText: string;
}

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const PRODUCTS: Product[] = [
  {
    name: "LIMSera",
    title: "ISO 17025-Compliant LIMS",
    description:
      "Industry-agnostic laboratory management engineered for compliance and customization. Adapts to your workflows—research, quality control, diagnostics, manufacturing.",
    href: "/products/limsera",
    image:
      "https://res.cloudinary.com/dfsu0xeb/image/upload/v1786092459/plaxonic/products/product-limsera.webp",
    imageAlt: "LIMSera laboratory management system",
    buttonText: "Learn More",
  },
  {
    name: "HealthSync",
    title: "Connected Healthcare Solutions",
    description:
      "Modern healthcare software designed to streamline clinical workflows, connect healthcare teams, and improve operational efficiency.",
    href: "/products/healthsync",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Healthcare technology and clinical workflows",
    buttonText: "Learn More",
  },
  {
    name: "DataSphere",
    title: "Enterprise Data Intelligence",
    description:
      "Transform complex business data into actionable insights with intelligent analytics, centralized reporting, and scalable data solutions.",
    href: "/products/datasphere",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Enterprise data analytics",
    buttonText: "Learn More",
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = PRODUCTS[activeIndex];
  const totalProducts = PRODUCTS.length;
  const progress = ((activeIndex + 1) / totalProducts) * 100;

  /* ------------------------------------------------------------------------ */
  /* Navigation                                                               */
  /* ------------------------------------------------------------------------ */

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? totalProducts - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % totalProducts);
  };

  /* ------------------------------------------------------------------------ */
  /* Render                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      id="products"
      className="relative w-full overflow-hidden bg-white pb-0 pt-14 sm:pt-20 lg:pt-32"
    >
      <div className="relative z-10 w-full">
        {/* ---------------------------------------------------------------- */}
        {/* Header                                                           */}
        {/* ---------------------------------------------------------------- */}

        <div className="mb-10 w-full sm:mb-12 lg:mb-16">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    WHAT WE BUILD
                  </span>
                </div>

                <h2 className="font-inter text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl">
                  Our <span className="text-primary">Products</span>.
                </h2>
              </div>

              <div className="mb-2">
                <a
                  href="/products"
                  className="group inline-flex items-center gap-2 border border-[#1a1f35] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1f35] transition-colors duration-300 hover:bg-[#1a1f35] hover:text-white lg:px-5 lg:py-2.5 lg:text-[13px] 2xl:px-6 2xl:py-3 2xl:text-sm"
                >
                  View All Products
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 lg:h-[15px] lg:w-[15px] 2xl:h-4 2xl:w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="mt-8 flex max-w-2xl gap-4">
              <div className="w-[3px] shrink-0 self-stretch bg-primary" />

              <p className="text-base text-gray-600 md:text-lg lg:text-base 2xl:text-lg">
                Our engineering expertise, packaged as platforms. Built from
                solving real enterprise problems, software you can deploy,
                trust, and rely on.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Product Carousel                                                 */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex flex-col lg:flex-row">
          {/* Product Information */}

          <div className="flex items-center pl-4 pr-4 sm:pl-6 sm:pr-6 lg:w-[48%] lg:pl-8 lg:pr-8 xl:pl-[calc(max(100vw_-_1800px,0px)/2_+_4rem)] xl:pr-16">
            {/* Navigation Controls */}

            <div className="mr-5 flex shrink-0 flex-col items-center self-stretch sm:mr-8 lg:mr-12">
              <div className="mb-6 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Previous product"
                  className="flex h-10 w-10 items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-dark sm:h-12 sm:w-12"
                >
                  <ChevronLeft
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next product"
                  className="flex h-10 w-10 items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-dark sm:h-12 sm:w-12"
                >
                  <ChevronRight
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Vertical Progress */}

              <div className="relative w-0.5 flex-1 bg-gray-200">
                <div
                  className="absolute left-0 top-0 h-full w-full origin-top bg-primary transition-transform duration-500"
                  style={{
                    transform: `scaleY(${progress / 100})`,
                  }}
                />
              </div>
            </div>

            {/* Active Product Details */}

            <div className="relative flex min-w-0 flex-1 flex-col justify-center">
              <div className="relative min-h-[360px] sm:min-h-[340px]">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {activeProduct.name}
                </span>

                <h3 className="mb-6 text-2xl font-medium leading-tight text-gray-900 sm:text-3xl lg:text-[2rem] 2xl:text-[2.5rem]">
                  {activeProduct.title}
                </h3>

                <p className="mb-8 line-clamp-3 max-w-md text-base leading-relaxed text-gray-600 sm:text-[18px] lg:text-[15px] 2xl:text-[18px]">
                  {activeProduct.description}
                </p>

                <a
                  href={activeProduct.href}
                  className="inline-flex items-center justify-center bg-[#1a1f35] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary lg:px-5 lg:py-2.5 lg:text-[13px] 2xl:px-6 2xl:py-3 2xl:text-sm"
                >
                  {activeProduct.buttonText}
                </a>

                {/* Product Counter */}

                <div className="absolute -bottom-8 left-0 flex items-center gap-3">
                  <span className="w-6 text-center text-base font-bold tabular-nums text-primary">
                    {activeIndex + 1}
                  </span>

                  <div className="relative h-[2px] w-16 bg-gray-300">
                    <div
                      className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <span className="w-6 text-center text-base font-bold tabular-nums text-gray-900">
                    {totalProducts}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="mt-10 flex min-w-0 items-center lg:mt-0 lg:w-[52%] lg:shrink-0 lg:pr-8 xl:pr-16">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={activeProduct.image}
                alt={activeProduct.imageAlt}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export default Products;
