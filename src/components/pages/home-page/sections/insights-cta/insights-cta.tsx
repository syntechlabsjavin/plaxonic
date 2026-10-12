import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const InsightsCtaSection = () => {

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      // Hook up to your newsletter API here
      console.log("Subscribe:", email);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      {/* Top split layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Left – copy */}
        <div className="w-full lg:w-1/2 bg-gray-900">
          <div className="max-w-[900px] lg:ml-auto px-6 sm:px-10 lg:px-12 2xl:px-16 pt-16 lg:pt-20 2xl:pt-24 pb-16 lg:pb-56">
            <span className="inline-block text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Featured Insights
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2rem] 2xl:text-[2.5rem] font-medium text-white"
              style={{ lineHeight: 1 }}
            >
              Where we stand on the technologies, trends, and transformations
              defining modern enterprises.
            </h2>
          </div>
        </div>

        {/* Right – video */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[400px] relative">
          <video
            src="src/assets/home-page/insights-cta.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Subscribe bar (overlays on large screens) */}
      <div className="relative bg-gray-900 py-8 lg:py-0 lg:bg-transparent lg:absolute lg:bottom-8 lg:left-0 lg:right-0 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-black/60 p-6 lg:p-8 2xl:p-10 border border-white/20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <p
                className="text-white text-xl sm:text-2xl lg:text-2xl 2xl:text-3xl leading-tight"
                style={{ fontWeight: 100 }}
              >
                Get the latest industry insights delivered to you
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-2 lg:w-auto"
              >
                <div className="flex w-full flex-col sm:flex-row gap-3 lg:w-auto">
                  <input
                    type="email"
                    required
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:flex-1 lg:w-56 2xl:w-64 px-5 py-3.5 lg:py-3 2xl:py-3.5 bg-white text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-3.5 lg:px-6 lg:py-3 2xl:px-8 2xl:py-3.5 bg-primary text-white font-semibold hover:bg-primary-dark transition-colors text-base lg:text-sm 2xl:text-base whitespace-nowrap disabled:opacity-70"
                  >
                    Subscribe
                    <ArrowUpRight
                      className="w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 group-hover:rotate-45 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsCtaSection;