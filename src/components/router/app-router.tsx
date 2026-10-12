import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import HomePage from "../pages/home-page/home-page";
import ContactPage from "../pages/contact-page/contact-page";
import WebApplicationDevelopment from "../pages/what-we-do/digital-transformation/web-application-development/web-application-development";
import MobileApplicationDevelopment from "../pages/what-we-do/digital-transformation/mobile-app-development/mobile-app-development";
import SaasPlatformDevelopment from "../pages/what-we-do/digital-transformation/saas-platform-development/saas-platform-development";
import HealthCareAndLifeSciences from "../pages/who-we-serve/health-care-and-life-sciences/health-care-and-life-sciences";
import EnergyAndUtilities from "../pages/who-we-serve/energy-and-utilities/energy-and-utilities";
import EducationEdTech from "../pages/who-we-serve/education-ed-tech/education-ed-tech";
import Agriculture from "../pages/who-we-serve/agriculture/agriculture";
import Banking from "../pages/who-we-serve/banking/banking";
import Telecommunications from "../pages/who-we-serve/telecommunications/telecommunications";
import GovernmentPublicSector from "../pages/who-we-serve/government-public-sector/government-public-sector";
import Restaurant from "../pages/who-we-serve/restaurant/restaurant";
import Manufacturing from "../pages/who-we-serve/manufacturing/manufacturing";
import Logistics from "../pages/who-we-serve/logistics/logistics";
import AutomotiveAndMobility from "../pages/who-we-serve/automotive-and-mobility/automotive-and-mobility";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* what we do */}
        {/* digital transformation */}
        <Route path="/services/web-application-development" element={<WebApplicationDevelopment />} />
        <Route path="/services/mobile-app-development" element={<MobileApplicationDevelopment />} />
        <Route path="/services/platform-engineering-services" element={<SaasPlatformDevelopment />} />

        {/* who we serve */}
        <Route path="/industries/healthcare" element={<HealthCareAndLifeSciences />} />
        <Route path="/industries/energy" element={<EnergyAndUtilities />} />
        <Route path="/industries/education" element={<EducationEdTech />} />
        <Route path="/industries/agriculture" element={<Agriculture />} />
        <Route path="/industries/banking" element={<Banking />} />
        <Route path="/industries/telecommunications" element={<Telecommunications />} />
        <Route path="/industries/government-public-sector" element={<GovernmentPublicSector />} />
        <Route path="/industries/restaurant" element={<Restaurant />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/logistics" element={<Logistics />} />
        <Route path="/industries/automotive-and-mobility" element={<AutomotiveAndMobility />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;