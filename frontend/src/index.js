import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import ScrollToTop from "./ScrollToTop";

import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";
import NotFound from "./landing_page/NotFound";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3002";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);
