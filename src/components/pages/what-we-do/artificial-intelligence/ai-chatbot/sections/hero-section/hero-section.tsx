import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageSquareText } from "lucide-react";
import ChatbotHeroBgVideo from "../../../../../../../assets/what-we-do/artificial-intelligence/ai-chatbot-hero.mp4";

type ChatMessage = {
  id: number;
  sender: "user" | "assistant";
  text: string;
  actions?: string[];
};

const CONVERSATION: ChatMessage[] = [
  {
    id: 1,
    sender: "user",
    text: "Hi, where's my order #4471?",
  },
  {
    id: 2,
    sender: "assistant",
    text: "It shipped yesterday and arrives Thursday. Want the tracking link?",
    actions: ["Track it", "Change address"],
  },
  {
    id: 3,
    sender: "user",
    text: "Yes, and can I add a gift note?",
  },
  {
    id: 4,
    sender: "assistant",
    text: "Done. Here's your tracking, and I've added a gift note to the package.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(100);

  // Scroll only the chatbot conversation, never the webpage.
  useEffect(() => {
    const container = chatContainerRef.current;

    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [messages, typing]);

  // Automatically play and replay the sample conversation.
  useEffect(() => {
    if (isPaused) return;

    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;
    let index = 0;

    setMessages([]);
    setTyping(false);

    const playNextMessage = () => {
      if (cancelled) return;

      if (index >= CONVERSATION.length) {
        timeout = setTimeout(() => {
          if (cancelled) return;

          index = 0;
          setMessages([]);
          setTyping(false);

          timeout = setTimeout(playNextMessage, 700);
        }, 3000);

        return;
      }

      const message = CONVERSATION[index];

      if (message.sender === "assistant") {
        setTyping(true);

        timeout = setTimeout(() => {
          if (cancelled) return;

          setTyping(false);
          setMessages((previous) => [...previous, message]);

          index += 1;
          timeout = setTimeout(playNextMessage, 900);
        }, 1200);
      } else {
        setMessages((previous) => [...previous, message]);

        index += 1;
        timeout = setTimeout(playNextMessage, 900);
      }
    };

    timeout = setTimeout(playNextMessage, 500);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [isPaused]);

  // Handle input submission.
  const handleSend = () => {
    const text = inputValue.trim();

    if (!text) return;

    // Pause the demo so it doesn't overwrite the user's conversation.
    setIsPaused(true);
    setTyping(false);

    setMessages((previous) => [
      ...previous,
      {
        id: ++messageIdRef.current,
        sender: "user",
        text,
      },
    ]);

    setInputValue("");
  };

  // Handle suggested chat actions.
  const handleAction = (action: string) => {
    setIsPaused(true);
    setTyping(false);

    const userMessage: ChatMessage = {
      id: ++messageIdRef.current,
      sender: "user",
      text: action,
    };

    const assistantMessage: ChatMessage = {
      id: ++messageIdRef.current,
      sender: "assistant",
      text:
        action === "Track it"
          ? "Your order is on its way and is expected to arrive Thursday. Your tracking details are ready."
          : "I can help with that. Please provide the updated shipping address for order #4471.",
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      assistantMessage,
    ]);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#070809] pt-28 pb-16 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={ChatbotHeroBgVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#070809]/55" />

      {/* Background glow */}
      <div className="pointer-events-none absolute top-[-12%] left-1/2 h-[520px] w-[860px] max-w-full -translate-x-1/2 rounded-full bg-primary/15 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Hero content */}
          <div className="text-left">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Artificial Intelligence / AI Solutions / AI Chatbot
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-inter text-[2rem] font-bold leading-[1.03] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
            >
              A Conversation That
              <br />
              <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-primary">
                Actually Helps.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg md:text-xl"
            >
              We build AI chatbots that understand intent, take action, and know
              when to bring in a human, on your website and every channel your
              customers already use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col items-stretch justify-start gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:justify-start"
              >
                Build Your Chatbot
                <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              </button>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 sm:justify-start"
              >
                See It In Action
              </a>
            </motion.div>
          </div>

          {/* Interactive chatbot preview */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="ml-0 w-full max-w-md border border-white/10 bg-[#0e1117] lg:ml-auto"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary text-white">
                <MessageSquareText className="h-4 w-4" />
              </span>

              <div>
                <div className="text-sm font-semibold leading-tight text-white">
                  Support Assistant
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  online now
                </div>
              </div>
            </div>

            {/* Conversation */}
            <div
              ref={chatContainerRef}
              className="flex h-[300px] flex-col justify-end gap-3 overflow-y-auto overscroll-contain p-5"
              aria-live="polite"
              aria-label="Chat conversation preview"
            >
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                        message.sender === "user"
                          ? "bg-primary text-white"
                          : "border border-white/10 bg-white/[0.06] text-gray-200"
                      }`}
                    >
                      {message.text}

                      {message.actions && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {message.actions.map((action) => (
                            <button
                              key={action}
                              type="button"
                              onClick={() => handleAction(action)}
                              className="inline-block border border-primary-light/40 px-2 py-0.5 text-[11px] text-primary-light transition-colors hover:bg-primary/10"
                            >
                              {action}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center gap-1 border border-white/10 bg-white/[0.06] px-4 py-3">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          animate={{ opacity: [0.35, 1, 0.35] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: dot * 0.2,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-primary-light"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Type a message..."
                aria-label="Type a message"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />

              <button
                type="submit"
                aria-label="Send message"
                className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary/20 text-primary-light transition-colors hover:bg-primary/30"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;