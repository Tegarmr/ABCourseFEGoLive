import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
import Google from "../assets/Google.png";
import { toast } from "react-toastify";
import axios from "axios";
import "./index.css";

const API_URL = import.meta.env.VITE_API_URL;

// Ensure FontAwesome is loaded
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  document.head.appendChild(link);
}

const LoginRegister = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  // Login state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);

  // Register state
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerErrors, setRegisterErrors] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // useEffect untuk styling body background
  useEffect(() => {
    // Simpan background asli
    const originalBackground = document.body.style.background;

    // Apply background gradient
    document.body.style.background =
      "linear-gradient(to bottom, #92d6d6, #b2e6a1)";

    // Cleanup function - kembalikan background asli saat unmount
    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  // Check if user is already authenticated
  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/auth/me`, {
          withCredentials: true,
        });

        if (response.data) {
          navigate("/app");
        }
      } catch (error) {
        console.error("Token invalid atau tidak ada, stay di login/register");
      }
    };

    checkToken();
  }, [navigate]);

  const handleRegisterClick = () => {
    setIsActive(true);
    // Clear errors when switching
    setLoginErrors({});
    setRegisterErrors({});
    setMessage("");
    setError(false);
  };

  const handleLoginClick = () => {
    setIsActive(false);
    // Clear errors when switching
    setLoginErrors({});
    setRegisterErrors({});
    setMessage("");
    setError(false);
  };

  // Login handlers
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on input change
    if (loginErrors[name]) {
      setLoginErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginErrors({});

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
          rememberMe: loginData.rememberMe,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error && Array.isArray(data.error)) {
          const newErrors = {};
          data.error.forEach((err) => {
            const field = err.path?.[0] || err.path;
            if (field) newErrors[field] = err.message;
          });
          setLoginErrors(newErrors);
          return;
        }
        throw new Error(data.message || "Login failed");
      }

      toast.success("Login berhasil!");
      navigate("/app");
    } catch (error) {
      console.error("Login error:", error);
      setLoginErrors({ general: error.message || "Login gagal. Coba lagi." });
    } finally {
      setLoginLoading(false);
    }
  };

  // Register handlers
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input change
    setRegisterErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);
    setRegisterErrors({});

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: registerData.username,
          email: registerData.email,
          password: registerData.password,
          confirmPassword: registerData.confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error && Array.isArray(data.error)) {
          const fieldErrors = {};
          data.error.forEach((err) => {
            const field = err.path?.[0];
            if (field) fieldErrors[field] = err.message;
          });
          setRegisterErrors(fieldErrors);
        } else {
          setMessage(data.message || "Registration failed");
          setError(true);
        }
      } else {
        setMessage(data.message || "Registration successful!");
        setError(false);
        setTimeout(() => {
          setIsActive(false); // Switch to login form
          setRegisterData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }, 1500);
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
      setError(true);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${API_URL}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Login error:", error.message);
    }

    // if (data?.url) {
    //   console.log(data.url);
    //   // window.location.href = data.url;
    // }
  };

  return (
    <div
      className={`auth-page-container ${isActive ? "auth-page-active" : ""}`}
      id="auth-page-container"
    >
      {/* Register Form */}
      <div className="auth-form-container auth-sign-up">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <div className="auth-social-icons">
            <button
              type="button"
              className="auth-social-icon"
              onClick={handleGoogleLogin}
            >
              <i className="fa-brands fa-google"></i>
            </button>
          </div>
          <span>or use your email for registration</span>

          <input
            type="text"
            name="username"
            placeholder="Name"
            value={registerData.username}
            onChange={handleRegisterChange}
            className="auth-input-field"
          />
          {registerErrors.username && (
            <p className="auth-error-text">{registerErrors.username}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            className="auth-input-field"
          />
          {registerErrors.email && (
            <p className="auth-error-text">{registerErrors.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleRegisterChange}
            className="auth-input-field"
          />
          {registerErrors.password && (
            <p className="auth-error-text">{registerErrors.password}</p>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={registerData.confirmPassword}
            onChange={handleRegisterChange}
            className="auth-input-field"
          />
          {registerErrors.confirmPassword && (
            <p className="auth-error-text">{registerErrors.confirmPassword}</p>
          )}

          <button type="submit" className="auth-submit-btn">
            Sign Up
          </button>

          {message && (
            <div
              className={`auth-message ${
                error ? "auth-message-error" : "auth-message-success"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>

      {/* Login Form */}
      <div className="auth-form-container auth-sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="auth-social-icons">
            <button
              type="button"
              className="auth-social-icon"
              onClick={handleGoogleLogin}
            >
              <i className="fa-brands fa-google"></i>
            </button>
          </div>
          <span>or use your email password</span>

          {loginErrors.general && (
            <div className="auth-error-message">{loginErrors.general}</div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            className="auth-input-field"
          />
          {loginErrors.email && (
            <p className="auth-error-text">{loginErrors.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            className="auth-input-field"
          />
          {loginErrors.password && (
            <p className="auth-error-text">{loginErrors.password}</p>
          )}

          <div className="auth-remember-forgot">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={loginData.rememberMe}
                onChange={handleLoginChange}
                className="auth-checkbox-input"
              />
              Remember me
            </label>
            <a
              href="#"
              onClick={() => navigate("/forgot-password")}
              className="auth-forgot-link"
            >
              Forget Your Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loginLoading}
            className="auth-submit-btn"
          >
            {loginLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>

      {/* Toggle Container */}
      <div className="auth-toggle-container">
        <div className="auth-toggle">
          <div className="auth-toggle-panel auth-toggle-left">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            {/* <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p> */}
            <button className="auth-toggle-btn" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="auth-toggle-panel auth-toggle-right">
            {/* <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p> */}
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="auth-toggle-btn" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
