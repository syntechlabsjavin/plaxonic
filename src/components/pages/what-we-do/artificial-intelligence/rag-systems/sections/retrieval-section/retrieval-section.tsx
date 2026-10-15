import Retrievel from "../../../../../../../assets/what-we-do/artificial-intelligence/retrieval.png";

const RETRIEVAL_FEATURES = [
  {
    number: "01",
    title: "Semantic, Not Literal",
    description:
      "Retrieval matches meaning, so a question phrased nothing like the source still finds it.",
  },
  {
    number: "02",
    title: "Hybrid Search",
    description:
      "We blend vector similarity with keyword and metadata filters for precision and recall.",
  },
  {
    number: "03",
    title: "Reranking",
    description:
      "A second pass reorders candidates so the best passages, not just the closest, reach the model.",
  },
];

const RetrievalSection = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Retrieval visualization */}
          <div className="relative order-2 aspect-[4/3] overflow-hidden border border-gray-200 bg-gray-900 lg:order-1">
            <img
              src={Retrievel}
              alt="Vectors radiating in embedding space"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute left-4 top-4 bg-black/50 px-2 py-1 font-mono text-[11px] text-white/80">
              query → 6 nearest neighbors
            </div>

            <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 font-mono text-[11px] text-primary">
              cosine similarity
            </div>
          </div>

          {/* Retrieval content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Retrieval
              </span>
            </div>

            <h2 className="mb-6 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Search By Meaning, Not{" "}
              <span className="text-gray-300">Keywords</span>.
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-gray-600 sm:mb-9 sm:text-base md:text-lg">
              We turn every passage into a vector, a point in a space where
              similar ideas sit close together. A question becomes a point too,
              and retrieval is simply finding its nearest neighbors. Done well,
              it is the difference between a useful answer and a wrong one.
            </p>

            {/* Retrieval features */}
            <div className="space-y-0">
              {RETRIEVAL_FEATURES.map((feature) => (
                <div
                  key={feature.number}
                  className="flex items-start gap-4 border-t border-gray-200 py-4 last:border-b"
                >
                  <span className="mt-0.5 flex-shrink-0 font-mono text-sm font-bold text-primary">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetrievalSection;