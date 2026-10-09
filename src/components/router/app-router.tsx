import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import HomePage from "../pages/home-page/home-page";
import ContactPage from "../pages/contact-page/contact-page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;