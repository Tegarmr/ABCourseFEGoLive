import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export default function EditProfile({ onCancel, onSave }) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Password input states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const [userData, setUserData] = useState({ username: '', email: '' });

  const fileInputRef = useRef(null);

  const fetchProfilePicture = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/user/profile-picture`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data?.profile_picture) {
        setProfileImageUrl(response.data.profile_picture);
      } else {
        setProfileImageUrl(null);
      }
    } catch (error) {
      console.error('Error fetching profile picture:', error);
      setProfileImageUrl(null);
    }
  };

  useEffect(() => {
    fetchProfilePicture();

    return () => {
      if (profileImageUrl && profileImageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(profileImageUrl);
      }
    };

    
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
useEffect(() => {
  const getUserData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/me`, {
        withCredentials: true,
      });

      const { username, email } = response.data.user;
      setUserData({ username, email });
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  getUserData();
  fetchProfilePicture();

  return () => {
    if (profileImageUrl && profileImageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(profileImageUrl);
    }
  };
}, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', selectedFile);

    try {
      const response = await axios.post(
        `${API_URL}/api/user/upload-profile`,
        formData,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.status === 200) {
        alert('Upload successful!');

        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
        }
        setSelectedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }

        await fetchProfilePicture();

        if (response.data.imageUrl) {
          setProfileImageUrl(response.data.imageUrl);
        }
      }
    } catch (error) {
      console.error('Upload error:', error);
      if (error.response?.status === 401) {
        alert('Session expired. Please login again.');
      } else {
        alert(`Upload failed: ${error.response?.data?.message || error.message}`);
      }
    }
  };

  const handleCancelSelectedFile = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  // ** Change Password Handler **
  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill all password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/auth/change-password`,
        {
          oldPassword: currentPassword,
          newPassword,
          confirmPassword,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert('Password changed successfully.');
        // Clear inputs after success
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('Change password error:', error);
      const message =
        error.response?.data?.message ||
        error.response?.data?.error?.message ||
        error.message ||
        'Error changing password.';
      alert(message);
    }
  };



  return (
    <div className="dashboard-container settings-page">
      <div className="settings-content">
        <h1 className="settings-title">Manage Profile</h1>

        {/* Avatar utama */}
        <div className="profile-card">
          <div className="profile-avatar">
            <img
              src={profileImageUrl || "/placeholder.svg?height=120&width=120"}
              alt="User profile"
              style={{ height: 120, width: 120, borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
          <div className="profile-info">
          <h2 className="profile-name">{userData.username}</h2>
<p className="profile-email">{userData.email}</p>

          </div>
        </div>

        {/* User info form */}
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control" value={userData.username} readOnly />


            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
             <input type="email" id="email" className="form-control" value={userData.email} readOnly />
            </div>
          </div>
        </div>

        <div className="form-divider"></div>

         {/* Password section */}
        <div className="form-section">
          <h2
            className="section-titles"
            style={{ fontSize: '24px', fontWeight: 600, textAlign: 'left', marginBottom: '20px', color: '#ffc107' }}
          >
            Password
          </h2>
          <div className="form-row">
            {/* Current Password */}
            <div className="form-group">
              <label htmlFor="currentPassword">Current password</label>
              <div className="password-input-container" style={{ position: 'relative' }}>
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  id="currentPassword"
                  className="form-control"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                />
                <button
                  className="password-toggle"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  type="button"
                >
                  👁
                </button>
              </div>
            </div>
            {/* New Password */}
            <div className="form-group">
              <label htmlFor="newPassword">New password</label>
              <div className="password-input-container" style={{ position: 'relative' }}>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
                <button
                  className="password-toggle"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  type="button"
                >
                  👁
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="password-input-container" style={{ position: 'relative' }}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
                <button
                  className="password-toggle"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  type="button"
                >
                  👁
                </button>
              </div>
            </div>
          </div>

          <div className="save-changes-container" style={{ marginTop: 20 }}>
            <button
              className="save-changes-btn"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </div>

        <div className="form-divider"></div>

        {/* Profile image upload section */}
        <div className="form-section">
          <h2 className="section-titles" style={{ fontSize: '24px', fontWeight: 600, textAlign: 'left', marginBottom: '20px', color: '#ffc107' }}>Profile image</h2>
          <div
            className="profile-image-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="upload-area" onClick={() => fileInputRef.current.click()} style={{ cursor: 'pointer' }}>
              {/* Preview image hanya di sini */}
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ height: 120, width: 120, borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <div className="upload-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#9CA3AF" />
                    </svg>
                  </div>
                  <p className="upload-text">Drag And Drop Files Here Or Upload</p>
                  <p className="upload-info">Accepted file types: JPG, SVG, PNG 120 x 120 (px)</p>
                </>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleFileChange}
            />

            {/* Tombol Upload dan Batal muncul hanya jika ada file terpilih */}
            {selectedFile && (
             <div className="upload-controls" style={{ marginTop: '15px' }}>
              <button onClick={handleUpload} style={{ marginRight: 10 }}>
                Upload
              </button>
              <button onClick={handleCancelSelectedFile}>Cancel</button>
            </div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button className="cancel-btn" onClick={onCancel}>Back</button>
   
        </div>
      </div>
    </div>
  );
}
