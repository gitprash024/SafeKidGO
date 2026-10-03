import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // TODO: jab har user ka role (admin/driver/parent) Firestore mein store
      // hone lagega, yahan check karke sahi dashboard par bhejna.
      navigate("/dashboard");
    } catch (err: any) {
      setError(friendlyError(err?.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Section */}
        <div className="login-left">
          <div className="brand">
            <div className="brand-icon">🛡️</div>
            <span>SafeKidGo</span>
          </div>

          <div className="left-content">
            <h1>
              Safety starts with
              <span> staying connected.</span>
            </h1>

            <p>
              Keep your children safe and stay connected with real-time
              school bus tracking, alerts and secure communication.
            </p>

            <div className="safety-features">
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <div>
                  <h3>Live Tracking</h3>
                  <p>Know where your child's bus is in real time.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔔</div>
                <div>
                  <h3>Instant Alerts</h3>
                  <p>Get important notifications instantly.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div>
                  <h3>Secure & Private</h3>
                  <p>Your child's information stays protected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-right">
          <div className="login-card">

            <div className="mobile-brand">
              <div className="brand-icon">🛡️</div>
              <span>SafeKidGo</span>
            </div>

            <div className="login-header">
              <h2>Welcome Back!</h2>
              <p>Login to your SafeKidGo account</p>
            </div>

            {error && <div className="login-error">{error}</div>}

            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <div className="input-wrapper">
                  <span className="input-icon">✉️</span>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">Password</label>

                  <a href="/forgot-password">
                    Forgot Password?
                  </a>
                </div>

                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    disabled={loading}
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Show password"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="login-options">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
              </div>

              {/* Login Button */}
              <button type="submit" className="login-button" disabled={loading}>
                {loading ? "Logging in…" : "Login"}
                {!loading && <span>→</span>}
              </button>

            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="signup-text">
              Don't have an account?
              <a href="/register"> Create Account</a>
            </div>

            <div className="login-footer">
              <span>🛡️</span>
              Safe & Secure • SafeKidGo
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

function friendlyError(code?: string): string {
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Email ya password galat hai.";
    case "auth/invalid-email":
      return "Ye email address sahi nahi lag raha.";
    case "auth/too-many-requests":
      return "Bohot zyada try ho gaye, thodi der baad try karo.";
    case "auth/network-request-failed":
      return "Internet connection check karo aur dubara try karo.";
    default:
      return "Kuch galat ho gaya. Firebase setup (.env) check karke dubara try karo.";
  }
}

export default Login;
