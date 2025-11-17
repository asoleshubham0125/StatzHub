import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 200) {
        setUser(res.data.user);
        window.location.href = "http://localhost:3001";
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mb-5">
      <div className="text-center mt-5 p-5">
        <h1>Login to your StatzHub Account</h1>
        <h3 className="text-muted mt-3 fs-4">
          Access your dashboard, analytics, and insights
        </h3>
      </div>

      <div className="row">
        <div className="col-4 mt-5 p-5">
          <img
            src="\media\images\signup.png"
            alt="login-img"
            style={{ width: "500px" }}
          />
        </div>

        <div className="col-2"></div>
        <form className="col-6 mt-5 p-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control p-2"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control p-2"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <Link to="/forgot-password" className="text-primary">
              Forgot Password?
            </Link>
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary w-100 p-2"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="fw-bold text-primary">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <Product />
    </div>
  );
}

export default Login;
