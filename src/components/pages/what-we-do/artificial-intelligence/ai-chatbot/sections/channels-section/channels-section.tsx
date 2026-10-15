type Channel = {
  name: string;
  subtitle: string;
  headerClass: string;
  logo?: string;
  messages: {
    sender: "user" | "assistant";
    text: string;
  }[];
};

const channels: Channel[] = [
  {
    name: "Website widget",
    subtitle: "Chat",
    headerClass: "bg-primary",
    messages: [
      {
        sender: "user",
        text: "Do you ship to Canada?",
      },
      {
        sender: "assistant",
        text: "Yes, 3 to 5 days. Want a shipping estimate?",
      },
    ],
  },
  {
    name: "WhatsApp",
    subtitle: "Online",
    headerClass: "bg-[#25D366]",
    logo: "https://plaxonic.com/logos/channels/whatsapp.svg",
    messages: [
      {
        sender: "user",
        text: "Reschedule my appointment?",
      },
      {
        sender: "assistant",
        text: "Sure, I have Thu 2pm or Fri 10am open.",
      },
    ],
  },
  {
    name: "Slack",
    subtitle: "App",
    headerClass: "bg-[#4A154B]",
    logo: "https://plaxonic.com/logos/channels/slack.svg",
    messages: [
      {
        sender: "user",
        text: "/orders status 4471",
      },
      {
        sender: "assistant",
        text: "Order 4471 shipped, arriving Thursday.",
      },
    ],
  },
  {
    name: "Instagram",
    subtitle: "Direct",
    headerClass: "bg-gradient-to-r from-[#833AB4] to-[#E1306C]",
    logo: "https://plaxonic.com/logos/channels/instagram.svg",
    messages: [
      {
        sender: "user",
        text: "Is the blue one in stock?",
      },
      {
        sender: "assistant",
        text: "It is. Want me to reserve it for you?",
      },
    ],
  },
] as const;

const ChannelsSection = () => {
  return (
    <section id="channels" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Omnichannel
            </span>
          </div>

          <h2 className="font-inter text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
            One Brain, Every <span className="text-gray-300">Channel</span>.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:mt-7 sm:text-base md:text-lg">
            The same assistant, with the same knowledge and memory, meets your
            customers wherever they are, and remembers the conversation across
            all of them.
          </p>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="flex flex-col overflow-hidden border border-gray-200 bg-gray-50"
            >
              {/* Card header */}
              <div
                className={`flex items-center gap-2.5 px-4 py-3 ${channel.headerClass}`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center ${
                    channel.logo ? "bg-white/90" : "bg-white/20"
                  }`}
                >
                  {channel.logo && (
                    <img
                      src={channel.logo}
                      alt=""
                      className="h-4 w-4 object-contain"
                      loading="lazy"
                    />
                  )}
                </span>

                <div className="leading-tight">
                  <div className="text-xs font-bold text-white">
                    {channel.name}
                  </div>

                  <div className="text-[10px] text-white/70">
                    {channel.subtitle}
                  </div>
                </div>
              </div>

              {/* Chat preview */}
              <div className="flex min-h-[180px] flex-1 flex-col justify-end gap-2.5 p-4">
                {channel.messages.map((message, index) => (
                  <div
                    key={`${channel.name}-${index}`}
                    className={`max-w-[88%] px-3 py-2 text-[12px] leading-snug ${
                      message.sender === "user"
                        ? "self-end bg-primary text-white"
                        : "self-start border border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
