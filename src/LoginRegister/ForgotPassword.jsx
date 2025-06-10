import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email address' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Failed to send reset link");
      }

      setStatus({ 
        type: 'success', 
        message: 'Password reset link has been sent to your email!' 
      });
      setEmail("");
    } catch (err) {
      setStatus({ 
        type: 'error', 
        message: err.message || 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forgot-pwd-background">
      <div className="forgot-pwd-container">
        <div className="forgot-pwd-header">
          <div className="forgot-pwd-icon-container">
            <Lock className="forgot-pwd-lock-icon" />
          </div>
          <h1 className="forgot-pwd-title">Forgot Password?</h1>
          <p className="forgot-pwd-subtitle">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="forgot-pwd-form">
          <div className="forgot-pwd-input-group">
            <div className="forgot-pwd-input-wrapper">
              <Mail className="forgot-pwd-input-icon" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className={`forgot-pwd-input ${status?.type === 'error' ? 'forgot-pwd-input-error' : ''}`}
              />
            </div>
          </div>

          {status && (
            <div className={`forgot-pwd-status-message forgot-pwd-status-${status.type}`}>
              {status.type === 'success' ? (
                <CheckCircle className="forgot-pwd-status-icon" />
              ) : (
                <AlertCircle className="forgot-pwd-status-icon" />
              )}
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`forgot-pwd-button ${isSubmitting ? 'forgot-pwd-button-disabled' : ''}`}
          >
            <div className="forgot-pwd-button-content">
              {isSubmitting ? (
                <>
                  <div className="forgot-pwd-spinner"></div>
                  Sending...
                </>
              ) : (
                'Send Reset Link'
              )}
            </div>
          </button>
        </form>

        <div className="forgot-pwd-footer">
          <Link to="/login" className="forgot-pwd-link-no-decoration">
            <button className="forgot-pwd-back-button">
              <ArrowLeft className="forgot-pwd-back-icon" />
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Add CSS styles with unique class names
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .forgot-pwd-background {
    min-height: 100vh;
    background: linear-gradient(to bottom, #92d6d6, #b2e6a1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .forgot-pwd-container {
    width: 100%;
    max-width: 420px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .forgot-pwd-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .forgot-pwd-icon-container {
    width: 80px;
    height: 80px;
    background-color: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px auto;
    border: 3px solid #e5e7eb;
  }

  .forgot-pwd-lock-icon {
    width: 32px;
    height: 32px;
    color: #6b7280;
  }

  .forgot-pwd-title {
    font-size: 28px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 12px 0;
    letter-spacing: -0.025em;
  }

  .forgot-pwd-subtitle {
    font-size: 16px;
    color: #6b7280;
    line-height: 1.5;
    margin: 0;
  }

  .forgot-pwd-form {
    margin-bottom: 24px;
  }

  .forgot-pwd-input-group {
    margin-bottom: 24px;
  }

  .forgot-pwd-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .forgot-pwd-input-icon {
    position: absolute;
    left: 16px;
    width: 20px;
    height: 20px;
    color: #9ca3af;
    z-index: 1;
  }

  .forgot-pwd-input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    font-size: 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    outline: none;
    transition: all 0.2s ease-in-out;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: inherit;
  }

  .forgot-pwd-input:focus {
    border-color: #1e8c80 !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
  }

  .forgot-pwd-input-error {
    border-color: #ef4444 !important;
  }

  .forgot-pwd-status-message {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
  }

  .forgot-pwd-status-success {
    background-color: #f0fdf4;
    border-color: #22c55e;
    color: #166534;
  }

  .forgot-pwd-status-error {
    background-color: #fef2f2;
    border-color: #ef4444;
    color: #dc2626;
  }

  .forgot-pwd-status-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .forgot-pwd-button {
    width: 100%;
    padding: 18px;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    border: none;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(to right, #4dc0aa, #1e8c80);
    cursor: pointer;
  }

  .forgot-pwd-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px 0 rgb(131, 202, 194);
  }

  .forgot-pwd-button-disabled {
    background-color: #9ca3af !important;
    transform: scale(0.98) !important;
    cursor: not-allowed !important;
  }

  .forgot-pwd-button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .forgot-pwd-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: forgot-pwd-spin 1s linear infinite;
  }

  @keyframes forgot-pwd-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .forgot-pwd-footer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .forgot-pwd-link-no-decoration {
    text-decoration: none;
  }

  .forgot-pwd-back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: none;
    border: none;
    color: #6b7280;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    font-family: inherit;
  }

  .forgot-pwd-back-button:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  .forgot-pwd-back-icon {
    width: 16px;
    height: 16px;
  }

  .forgot-pwd-back-icon:hover {
  transform: translateX(-2px);
  }
`;
document.head.appendChild(styleSheet);

export default ForgotPassword;