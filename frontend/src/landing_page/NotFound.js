import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100 text-center"
      style={{
        background: "linear-gradient(135deg, #f5f9ff 0%, #e3f2ff 100%)",
        color: "#1a2b6d",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Animated chart-like circles */}
      <motion.div
        className="position-relative mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <svg width="150" height="150" viewBox="0 0 150 150">
          <circle
            cx="75"
            cy="75"
            r="60"
            stroke="#007bff"
            strokeWidth="4"
            fill="none"
            strokeDasharray="400"
            strokeDashoffset="150"
          />
          <circle
            cx="75"
            cy="75"
            r="45"
            stroke="#00c9a7"
            strokeWidth="3"
            fill="none"
            strokeDasharray="280"
            strokeDashoffset="80"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="36"
            fill="#007bff"
            fontWeight="600"
          >
            404
          </text>
        </svg>
      </motion.div>

      {/* Heading and description */}
      <motion.h1
        className="fw-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Oops! Page Not Found
      </motion.h1>

      <motion.p
        className="text-muted mt-3 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{ maxWidth: "400px" }}
      >
        Looks like the data you’re searching for doesn’t exist. But don’t worry
        — your investments are still safe!
      </motion.p>

      {/* Button */}
      <motion.button
        className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Dashboard
      </motion.button>
    </div>
  );
}

export default NotFound;
