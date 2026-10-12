const WhyItMatters = () => {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Why It Matters
              </span>
            </div>
            <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05]">
              The Grid Balances in{" "}
              <span className="text-primary">Real Time</span>.
            </h2>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <div className="w-[3px] flex-shrink-0 bg-primary" />
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Supply and demand have to match continuously, or the network
              destabilizes. Feeders overload when a neighborhood loads at six,
              frequency swings when cloud cover crosses a solar farm, and
              outages surface through customer calls rather than sensors. We
              reduce that gap with telemetry ingested at the edge, forecasting
              models that read behind-the-meter generation, and grid data
              current enough to dispatch on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;