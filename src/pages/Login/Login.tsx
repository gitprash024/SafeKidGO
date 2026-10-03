import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, trimmedEmail, password);

      // Login successful
      navigate("/dashboard");
    } catch (err: unknown) {
      const firebaseError = err as { code?: string };
      setError(friendlyError(firebaseError.code));
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Change this route if your forgot-password page uses another path.
    navigate("/forgot-password");
  };

  const handleRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate("/register");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* =========================
            LEFT SECTION
        ========================= */}

        <section className="login-left">
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
                  <p>
                    Know where your child's bus is in real time.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔔</div>

                <div>
                  <h3>Instant Alerts</h3>
                  <p>
                    Get important notifications instantly.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔒</div>

                <div>
                  <h3>Secure & Private</h3>
                  <p>
                    Your child's information stays protected.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================
            RIGHT SECTION
        ========================= */}

        <section className="login-right">
          <div className="login-card">

            {/* Mobile Brand */}

            <div className="mobile-brand">
              <div className="brand-icon">🛡️</div>
              <span>SafeKidGo</span>
            </div>

            {/* Header */}

            <div className="login-header">
              <h2>Welcome Back!</h2>

              <p>
                Login to your SafeKidGo account
              </p>
            </div>

            {/* Error */}

            {error && (
              <div
                className="login-error"
                role="alert"
                aria-live="polite"
              >
                {error}
              </div>
            )}

            {/* Login Form */}

            <form onSubmit={handleSubmit} noValidate>

              {/* Email */}

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-wrapper">
                  <span
                    className="input-icon"
                    aria-hidden="true"
                  >
                    ✉️
                  </span>

                  <input
                    id="email"
                    name="email"
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
                  <label htmlFor="password">
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </a>
                </div>

                <div className="input-wrapper">
                  <span
                    className="input-icon"
                    aria-hidden="true"
                  >
                    🔒
                  </span>

                  <input
                    id="password"
                    name="password"
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
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    disabled={loading}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Remember Me */}

              <div className="login-options">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    disabled={loading}
                  />

                  <span>Remember me</span>
                </label>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Logging in...
                  </>
                ) : (
                  <>
                    Login
                    <span>→</span>
                  </>
                )}
              </button>

            </form>

            {/* Divider */}

            <div className="divider">
              <span>OR</span>
            </div>

            {/* Register */}

            <div className="signup-text">
              Don't have an account?

              <a
                href="/register"
                onClick={handleRegister}
              >
                {" "}
                Create Account
              </a>
            </div>

            {/* Footer */}

            <div className="login-footer">
              <span>🛡️</span>
              Safe & Secure • SafeKidGo
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

/* =========================
   FIREBASE ERROR HANDLER
========================= */

function friendlyError(code?: string): string {
  switch (code) {
    case "auth/invalid-credential":
      return "Email or password is incorrect.";

    case "auth/wrong-password":
      return "Email or password is incorrect.";

    case "auth/user-not-found":
      return "No account exists with this email.";

    case "auth/invalid-email":
      return "Please enter a valid email address.";

    case "auth/user-disabled":
      return "This account has been disabled.";

    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later.";

    case "auth/network-request-failed":
      return "Please check your internet connection and try again.";

    case "auth/operation-not-allowed":
      return "Email/password login is not enabled in Firebase.";

    default:
      return "Something went wrong. Please try again.";
  }
}

export default Login;