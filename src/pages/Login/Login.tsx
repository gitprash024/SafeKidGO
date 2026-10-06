import React, { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom"; // Use React Router for SPA navigation
import "./login.css";

// ===============================
// SAFEKIDGO ASSETS
// ===============================
import logo from "../../assets/Icon.png";
import schoolBg from "../../assets/school-bg.png";
import schoolBus from "../../assets/Modern Yellow School Bus Render.png";
import child from "../../assets/Cheerful Schoolboy with Blue Backpack.png";

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("safekidgo_admin_email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const validateEmail = (inputEmail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      // Example Backend API integration ready
      /*
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("token", data.token);
      */

      if (rememberMe) {
        localStorage.setItem("safekidgo_admin_email", email.trim());
      } else {
        localStorage.removeItem("safekidgo_admin_email");
      }

      await new Promise((resolve) => setTimeout(resolve, 900));
      navigate("/admin/dashboard"); // Replaced full reload with SPA transition
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sk-login-page">
      {/* ================================ LEFT BRAND PANEL ================================= */}
      <section className="sk-brand-panel">
        <div className="sk-brand-glow sk-glow-one"></div>
        <div className="sk-brand-glow sk-glow-two"></div>

        <div className="sk-brand-logo">
          <img src={logo} alt="SafeKidGo Logo" />
          <div className="sk-brand-name-wrapper">
            <div className="sk-brand-name">SafeKid<span>Go</span></div>
            <div className="sk-brand-tagline">Track. Protect. Trust.</div>
          </div>
        </div>

        <div className="sk-brand-content">
          <div className="sk-eyebrow">SAFEKIDGO ADMIN PORTAL</div>
          <h1>Safety starts with <span>staying connected.</span></h1>
          <p className="sk-brand-description">
            Manage, monitor and ensure every child's safe journey with real-time tracking, alerts and secure communication.
          </p>

          <div className="sk-feature-list">
            <div className="sk-feature">
              <span className="sk-feature-icon" role="img" aria-label="Pin">📍</span>
              <div className="sk-feature-content">
                <strong>Live Tracking</strong>
                <span>Know where every bus is in real time.</span>
              </div>
            </div>
            <div className="sk-feature">
              <span className="sk-feature-icon" role="img" aria-label="Bell">🔔</span>
              <div className="sk-feature-content">
                <strong>Instant Alerts</strong>
                <span>Get important notifications instantly.</span>
              </div>
            </div>
            <div className="sk-feature">
              <span className="sk-feature-icon" role="img" aria-label="Shield">🛡️</span>
              <div className="sk-feature-content">
                <strong>Secure &amp; Private</strong>
                <span>Your school's data stays protected.</span>
              </div>
            </div>
            <div className="sk-feature">
              <span className="sk-feature-icon" role="img" aria-label="People">👥</span>
              <div className="sk-feature-content">
                <strong>Easy Management</strong>
                <span>Manage schools, drivers and routes in one place.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sk-visual-area">
          <img src={schoolBg} alt="" className="sk-school-bg" />
          <div className="sk-visual-overlay"></div>
          <div className="sk-route">
            <span className="sk-route-dot sk-dot-one"></span>
            <span className="sk-route-dot sk-dot-two"></span>
            <span className="sk-route-line"></span>
          </div>
          <img src={schoolBus} alt="School Bus" className="sk-school-bus" />
          <div className="sk-shield-glow"></div>
          <div className="sk-hero-shield">
            <img src={logo} alt="SafeKidGo Shield" />
          </div>
          <img src={child} alt="SafeKidGo Child" className="sk-child" />
        </div>

        <div className="sk-stats">
          <div className="sk-stat"><strong>500+</strong><span>Schools</span></div>
          <div className="sk-stat-divider"></div>
          <div className="sk-stat"><strong>50,000+</strong><span>Parents</span></div>
          <div className="sk-stat-divider"></div>
          <div className="sk-stat"><strong>1,000+</strong><span>Buses</span></div>
          <div className="sk-stat-divider"></div>
          <div className="sk-stat"><strong>99.8%</strong><span>Uptime</span></div>
        </div>
      </section>

      {/* ================================ RIGHT LOGIN PANEL ================================= */}
      <section className="sk-login-panel">
        <div className="sk-login-card">
          <div className="sk-login-logo">
            <img src={logo} alt="SafeKidGo" />
            <div>
              <div className="sk-login-brand">SafeKid<span>Go</span></div>
              <small>Track. Protect. Trust.</small>
            </div>
          </div>

          <div className="sk-login-header">
            <div className="sk-admin-badge">ADMIN PORTAL</div>
            <h2>Welcome Back!</h2>
            <p>Login to your SafeKidGo Admin account</p>
          </div>

          {/* ERROR DISPLAY */}
          {error && (
            <div className="sk-error" role="alert">
              <span>!</span> {error}
            </div>
          )}

          {/* FORM START */}
          <form className="sk-login-form" onSubmit={handleSubmit}>
            <div className="sk-form-group">
              <label htmlFor="email">Email Address</label>
              <div className="sk-input-wrapper">
                <span className="sk-input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="sk-form-group">
              <div className="sk-password-label">
                <label htmlFor="password">Password</label>
                <button
                  type="button"
                  className="sk-forgot"
                  onClick={() => alert("Password reset functionality will be connected to your backend.")}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="sk-input-wrapper">
                <span className="sk-input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="5" y="10" width="14" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="sk-password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* REMEMBER ME & SECURE LOGIN ROW */}
            <div className="sk-remember-row">
              <label className="sk-checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="sk-checkmark"></span>
                <span>Remember me</span>
              </label>
              <span className="sk-secure-text">🔒 Secure Login</span>
            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="submit"
              className={`sk-login-button ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="sk-spinner"></span> Signing in...
                </>
              ) : (
                <>
                  <span>Login</span> <span className="sk-arrow">→</span>
                </>
              )}
            </button>
          </form>

          <div className="sk-divider">
            <span></span><small>OR</small><span></span>
          </div>

          <div className="sk-create-account">
            <span>Don't have an account?</span>
            <button type="button" onClick={() => navigate("/admin/register")}>
              Create Account
            </button>
          </div>

          <div className="sk-security">
            <div className="sk-security-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className="sk-security-text">
              <strong>Safe &amp; Secure</strong>
              <span>SafeKidGo Admin Portal</span>
            </div>
          </div>
        </div>
        <div className="sk-login-copyright">© 2026 SafeKidGo. All Rights Reserved.</div>
      </section>
    </div>
  );
};

export default Login;