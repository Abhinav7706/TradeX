import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Signup() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === "/login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setIsLogin(location.pathname === "/login");
    setError("");
    setSuccess("");
  }, [location.pathname]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isLogin && formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const endpoint = isLogin ? "http://localhost:3002/login" : "http://localhost:3002/signup";
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { username: formData.username, email: formData.email, password: formData.password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Authentication failed");
      }

      // Mark user as registered in localStorage so navbar remembers
      localStorage.setItem("isRegistered", "true");

      // Save token and user details to localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess(
        isLogin
          ? "Logged in successfully! Redirecting to Dashboard..."
          : "Account created successfully! Redirecting to Dashboard..."
      );

      // Redirect to Dashboard (assumes Dashboard runs on port 3001)
      setTimeout(() => {
        window.location.href = "http://localhost:3001";
      }, 1500);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-5 my-4">
      <div className="row align-items-center">
        {/* Left column - Banner & Benefits */}
        <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0">
          <img
            src="media/images/signup.png"
            alt="Sign up banner"
            style={{ width: "85%", maxWidth: "450px" }}
            className="mb-4"
          />
          <h3 className="fs-3 text-muted">Join 1.5+ Crore Investors</h3>
          <p className="text-secondary mt-2">
            Invest in stocks, derivatives, mutual funds, ETFs, and bonds with zero brokerage on investments.
          </p>
        </div>

        {/* Right column - Auth Form */}
        <div className="col-lg-5 offset-lg-1 col-md-12">
          <div className="card shadow-sm border-0 p-4 rounded-3">
            <div className="d-flex justify-content-between mb-4 border-bottom pb-2">
              <button
                type="button"
                className={`btn btn-link text-decoration-none fs-5 fw-semibold ${
                  !isLogin ? "text-primary border-bottom border-primary border-2 pb-1" : "text-muted"
                }`}
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                  setSuccess("");
                }}
              >
                Sign up
              </button>
              <button
                type="button"
                className={`btn btn-link text-decoration-none fs-5 fw-semibold ${
                  isLogin ? "text-primary border-bottom border-primary border-2 pb-1" : "text-muted"
                }`}
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                  setSuccess("");
                }}
              >
                Log in
              </button>
            </div>

            <h4 className="mb-3">{isLogin ? "Welcome back!" : "Create your account"}</h4>
            <p className="text-muted small mb-4">
              {isLogin
                ? "Enter your credentials to access your trading console."
                : "Enter your details to begin your trading & investment journey."}
            </p>

            {error && (
              <div className="alert alert-danger py-2 small" role="alert">
                {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success py-2 small" role="alert">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label text-muted small fw-semibold">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control py-2"
                    placeholder="e.g. rahul_sharma"
                    value={formData.username}
                    onChange={handleChange}
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label text-muted small fw-semibold">
                  {isLogin ? "Email or Username" : "Email Address"}
                </label>
                <input
                  type={isLogin ? "text" : "email"}
                  name="email"
                  className="form-control py-2"
                  placeholder={isLogin ? "Enter email or username" : "name@example.com"}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-muted small fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control py-2"
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label text-muted small fw-semibold">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control py-2"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 mt-2 fw-semibold fs-6"
                style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}
                disabled={loading}
              >
                {loading ? "Processing..." : isLogin ? "Log in" : "Sign up"}
              </button>
            </form>

            <div className="text-center mt-4">
              <span className="text-muted small">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                type="button"
                className="btn btn-link btn-sm p-0 text-decoration-none fw-semibold"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                  setSuccess("");
                }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </div>

            <p className="text-center text-muted small mt-4 mb-0" style={{ fontSize: "0.75rem" }}>
              By continuing, you agree to Zerodha's terms & privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
