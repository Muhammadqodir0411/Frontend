import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortoliosPage from "./pages/PortoliosPage";
import ServicesPage from "./pages/ServicesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"></Route>
            <Route index element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
            <Route path="services" element={<ServicesPage />}></Route>
            <Route path="portolios" element={<PortoliosPage />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
