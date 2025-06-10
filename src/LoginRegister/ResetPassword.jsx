import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setStatus({ 
        type: 'error', 
        message: 'Password reset token not found or invalid.' 
      });
      setTimeout(() => navigate("/forgot-password"), 3000);
    }
  }, [token, navigate]);

  const handleReset = async () => {
    if (!token) {
      setStatus({ 
        type: 'error', 
        message: 'Password reset token not found or invalid.' 
      });
      setTimeout(() => navigate("/forgot-password"), 3000);
      return;
    }

    if (!newPassword || !confirmPassword) {
      setStatus({ type: 'error', message: 'Please fill in all password fields' });
      return;
    }

    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: 'Password must be at least 6 characters' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', message: 'Passwords do not match.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword, confirmPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message && data.message.includes("Token")) {
          setStatus({ type: 'error', message: data.message });
          setTimeout(() => navigate("/forgot-password"), 3000);
        } else {
          throw new Error(data.message || "An error occurred.");
        }
        return;
      }

      setStatus({ 
        type: 'success', 
        message: 'Password successfully changed! Redirecting to login page...' 
      });
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setStatus({ 
        type: 'error', 
        message: err.message || 'An error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reset-pwd-background">
      <div className="reset-pwd-container">
        <div className="reset-pwd-header">
          <div className="reset-pwd-icon-container">
            <Lock className="reset-pwd-lock-icon" />
          </div>
          <h1 className="reset-pwd-title">Reset Password</h1>
          <p className="reset-pwd-subtitle">
            Enter your new password to secure your account.
          </p>
        </div>

        <div className="reset-pwd-form">
          <div className="reset-pwd-input-group">
            <label className="reset-pwd-label">New Password</label>
            <div className="reset-pwd-input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
                className={`reset-pwd-input ${status?.type === 'error' ? 'reset-pwd-input-error' : ''}`}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="reset-pwd-eye-icon"
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          <div className="reset-pwd-input-group">
            <label className="reset-pwd-label">Confirm Password</label>
            <div className="reset-pwd-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isSubmitting}
                className={`reset-pwd-input ${status?.type === 'error' ? 'reset-pwd-input-error' : ''}`}
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="reset-pwd-eye-icon"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {status && (
            <div className={`reset-pwd-status-message reset-pwd-status-${status.type}`}>
              {status.type === 'success' ? (
                <CheckCircle className="reset-pwd-status-icon" />
              ) : (
                <AlertCircle className="reset-pwd-status-icon" />
              )}
              {status.message}
            </div>
          )}

          <button
            onClick={handleReset}
            disabled={isSubmitting}
            className={`reset-pwd-button ${isSubmitting ? 'reset-pwd-button-disabled' : ''}`}
          >
            <div className="reset-pwd-button-content">
              {isSubmitting ? (
                <>
                  <div className="reset-pwd-spinner"></div>
                  Changing...
                </>
              ) : (
                'Change Password'
              )}
            </div>
          </button>
        </div>

        <div className="reset-pwd-footer">
          <Link to="/login" className="reset-pwd-link-no-decoration">
            <button className="reset-pwd-back-button">
              <ArrowLeft className="reset-pwd-back-icon" />
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
  .reset-pwd-background {
    min-height: 100vh;
    background: linear-gradient(to bottom, #92d6d6, #b2e6a1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .reset-pwd-container {
    width: 100%;
    max-width: 420px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .reset-pwd-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .reset-pwd-icon-container {
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

  .reset-pwd-lock-icon {
    width: 32px;
    height: 32px;
    color: #6b7280;
  }

  .reset-pwd-title {
    font-size: 28px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 12px 0;
    letter-spacing: -0.025em;
  }

  .reset-pwd-subtitle {
    font-size: 16px;
    color: #6b7280;
    line-height: 1.5;
    margin: 0;
  }

  .reset-pwd-form {
    margin-bottom: 24px;
  }

  .reset-pwd-input-group {
    margin-bottom: 24px;
  }

  .reset-pwd-label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }

  .reset-pwd-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .reset-pwd-input {
    width: 100%;
    padding: 16px;
    padding-right: 48px;
    font-size: 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    outline: none;
    transition: all 0.2s ease-in-out;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: inherit;
  }

  .reset-pwd-input:focus {
    border-color: #1e8c80 !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
  }

  .reset-pwd-input-error {
    border-color: #ef4444 !important;
  }

  .reset-pwd-eye-icon {
    position: absolute;
    right: 16px;
    color: #9ca3af;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 4px;
    transition: color 0.2s ease-in-out;
    user-select: none;
  }

  .reset-pwd-eye-icon:hover {
    color: #6b7280;
  }

  .reset-pwd-status-message {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
  }

  .reset-pwd-status-success {
    background-color: #f0fdf4;
    border-color: #22c55e;
    color: #166534;
  }

  .reset-pwd-status-error {
    background-color: #fef2f2;
    border-color: #ef4444;
    color: #dc2626;
  }

  .reset-pwd-status-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .reset-pwd-button {
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

  .reset-pwd-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px 0 rgb(131, 202, 194);
  }

  .reset-pwd-button-disabled {
    background-color: #9ca3af !important;
    transform: scale(0.98) !important;
    cursor: not-allowed !important;
  }

  .reset-pwd-button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .reset-pwd-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: reset-pwd-spin 1s linear infinite;
  }

  @keyframes reset-pwd-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .reset-pwd-footer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .reset-pwd-link-no-decoration {
    text-decoration: none;
  }

  .reset-pwd-back-button {
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

  .reset-pwd-back-button:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  .reset-pwd-back-icon {
    width: 16px;
    height: 16px;
  }

  .reset-pwd-back-icon:hover {
  transform: translateX(-2px);
  }
`;
document.head.appendChild(styleSheet);

export default ResetPassword;