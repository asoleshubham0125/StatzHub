import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.acceptTerms) {
      setError("You must agree to the terms.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "/api/auth/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      if (res.status === 201) {
        window.location.href = "http://localhost:3001/";
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mb-5">
        <div className="text-center mt-5 p-5">
          <h1>Open a free StatzHub account online</h1>
          <h3 className="text-muted mt-3 fs-4">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h3>
        </div>

        <div className="row">
          <div className="col-4 mt-5 p-5">
            <img
              src="\media\images\signup.png"
              alt="signpage"
              style={{ width: "500px" }}
            />
          </div>

          <div className="col-2"></div>

          <form className="col-6 mt-5 p-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter username"
                required
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Create Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                name="acceptTerms"
                className="form-check-input"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <label className="form-check-label">Agree to terms</label>
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary w-100 p-2"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Submit"}
            </button>

            <p className="mt-3">
              Already signed up?{" "}
              <Link to="/login" className="fw-bold text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Product />
    </>
  );
}

export default Signup;
