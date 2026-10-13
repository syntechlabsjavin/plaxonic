interface ThreatEvent {
  time: string;
  title: string;
  status: string;
  color: "green" | "amber" | "primary";
}

const threatEvents: ThreatEvent[] = [
  {
    time: "00:03",
    title: "Phishing campaign detected",
    status: "Blocked",
    color: "green",
  },
  {
    time: "00:11",
    title: "Brute-force login attempt",
    status: "Blocked",
    color: "green",
  },
  {
    time: "00:24",
    title: "Malware signature match",
    status: "Quarantined",
    color: "green",
  },
  {
    time: "00:42",
    title: "Anomalous data egress",
    status: "Flagged",
    color: "amber",
  },
  {
    time: "01:05",
    title: "Privilege escalation attempt",
    status: "Contained",
    color: "green",
  },
  {
    time: "01:18",
    title: "Suspicious API activity",
    status: "Monitoring",
    color: "primary",
  },
];

const statusStyles = {
  green: {
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    border: "border-emerald-400/30",
  },
  amber: {
    dot: "bg-amber-400",
    text: "text-amber-400",
    border: "border-amber-400/30",
  },
  primary: {
    dot: "bg-primary-light",
    text: "text-primary-light",
    border: "border-primary-light/30",
  },
};

const ThreatLandscape = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070809] py-16 sm:py-20 md:py-24 lg:py-36">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-[-20%] h-[500px] w-[600px] rounded-full bg-primary/15 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                The Threat Landscape
              </span>
            </div>

            <h2 className="mb-8 font-inter text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              It's Not{" "}
              <span className="text-white/40">If</span>. It's{" "}
              <span className="text-primary-light">When</span>.
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
              Attack surfaces grow with every new service, integration,
              and login. Threats are automated, persistent, and
              increasingly AI-assisted. Security can't be a one-time
              audit, it has to be a capability that's always watching.
              This is a glimpse of what that looks like.
            </p>

            {/* Live Defense Indicator */}
            <div className="flex items-center gap-3 text-white/70">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm font-medium">
                Live defense, 24/7/365
              </span>
            </div>
          </div>

          {/* Threat Monitor Panel */}
          <div className="overflow-hidden bg-white/[0.03] shadow-2xl ring-1 ring-white/10">
            {/* Terminal Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

              <span className="ml-2 font-mono text-xs text-white/50">
                threat-monitor — live
              </span>
            </div>

            {/* Threat Events */}
            <div className="divide-y divide-white/[0.06]">
              {threatEvents.map((event) => {
                const styles = statusStyles[event.color];

                return (
                  <div
                    key={event.time}
                    className="flex items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5"
                  >
                    <span
                      className={`h-2 w-2 flex-shrink-0 rounded-full ${styles.dot}`}
                    />

                    <span className="w-12 flex-shrink-0 font-mono text-[11px] text-white/40">
                      {event.time}
                    </span>

                    <span className="min-w-0 flex-1 truncate text-sm text-white/85">
                      {event.title}
                    </span>

                    <span
                      className={`flex-shrink-0 border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${styles.text} ${styles.border}`}
                    >
                      {event.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatLandscape;