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
import Entertainment from "../pages/who-we-serve/entertainment/entertainment";
import RetailAndEcommerce from "../pages/who-we-serve/retail-and-ecommerce/retail-and-ecommerce";
import Travel from "../pages/who-we-serve/travel/travel";
import RealEstateAndConstruction from "../pages/who-we-serve/real-estate-and-construction/real-estate-and-construction";
import NonProfit from "../pages/who-we-serve/non-profit/non-profit";
import MicroServicesApiDevelopment from "../pages/what-we-do/digital-transformation/microservices-api-development/microservices-api-development";
import CustomApplicationDevelopment from "../pages/what-we-do/digital-transformation/custom-application-development/custom-application-development";
import CRMSolutions from "../pages/what-we-do/digital-transformation/crm-solutions/crm-solutions";
import ERPSolutions from "../pages/what-we-do/digital-transformation/erp-solutions/erp-solutions";
import APIMiddlewareIntegration from "../pages/what-we-do/digital-transformation/api-middleware-integration/api-middleware-integration";
import EnterpriseSoftwareDevelopment from "../pages/what-we-do/digital-transformation/enterprise-software-development/enterprise-software-development";
import SupportMaintenance from "../pages/what-we-do/digital-transformation/support-maintenance/support-maintenance";
import Consulting from "../pages/what-we-do/digital-transformation/consulting/consulting";
import CyberSecurity from "../pages/what-we-do/digital-transformation/cyber-security/cyber-security";
import QualityEngineering from "../pages/what-we-do/digital-transformation/quality-engineering/quality-engineering";

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
        <Route path="/services/microservices-api-development" element={<MicroServicesApiDevelopment />} />
        <Route path="/services/custom-application-development" element={<CustomApplicationDevelopment />} />
        <Route path="/services/crm-solutions" element={<CRMSolutions />} />
        <Route path="/services/erp-solutions" element={<ERPSolutions />} />
        <Route path="/services/api-middleware-integration" element={<APIMiddlewareIntegration />} />
        <Route path="/services/enterprise-software-development" element={<EnterpriseSoftwareDevelopment />} />
        <Route path="/services/support-maintenance" element={<SupportMaintenance />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/cybersecurity" element={<CyberSecurity />} />
        <Route path="/services/quality-engineering-testing" element={<QualityEngineering />} />

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
        <Route path="/industries/entertainment" element={<Entertainment />} />
        <Route path="/industries/retail-and-ecommerce" element={<RetailAndEcommerce />} />
        <Route path="/industries/travel" element={<Travel />} />
        <Route path="/industries/real-estate-and-construction" element={<RealEstateAndConstruction />} />
        <Route path="/industries/non-profit" element={<NonProfit />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;