import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import TopBar from "./components/TopBar";

import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3002";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <TopBar />
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
