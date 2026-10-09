const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0b0d] pt-32 pb-16 lg:pt-40 lg:pb-20">
      <img
        src="https://res.cloudinary.com/dfsu0xeb/image/upload/plaxonic/contact/contact-hero.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0b0d] via-[#0a0b0d]/85 to-[#0a0b0d]/25"></div>

      <div className="pointer-events-none absolute inset-0 bg-[#0a0b0d]/20"></div>

      <div className="pointer-events-none absolute -top-24 left-[-5%] h-[420px] w-[560px] rounded-full bg-primary/15 blur-[160px]"></div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
          Keep In <span className="text-primary">Touch</span>.
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;