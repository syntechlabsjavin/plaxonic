import LocationsSection from "./sections/location-section/location-section";
import ContactForm from "./sections/contact-form/contact-form";
import ContactHero from "./sections/contact-hero/contect-hero";
import CtaSection from "./sections/cta-section/cta-section";

const ContactPage = () => {
  return (
    <>
    <ContactHero />
    <ContactForm />
    <LocationsSection />
    <CtaSection />
    </>
  );
};

export default ContactPage;