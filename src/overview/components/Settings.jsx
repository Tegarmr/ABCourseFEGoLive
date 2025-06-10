import { useState, useEffect } from 'react';
import axios from 'axios';
import EditProfile from './Editprofile';

const API_URL = import.meta.env.VITE_API_URL;

export default function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });
  const [profileImageUrl, setProfileImageUrl] = useState(null);

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

    async function fetchProfilePicture() {
      try {
        const response = await axios.get(`${API_URL}/api/user/profile-picture`, {
          withCredentials: true,
        });

        if (response.status === 200 && response.data?.profile_picture) {
          setProfileImageUrl(response.data.profile_picture);
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error);
        setProfileImageUrl(null);
      }
    }

    getUserData();
    fetchProfilePicture();

    // Cleanup (optional, jika kamu menggunakan URL.createObjectURL)
    return () => {
      if (profileImageUrl && profileImageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(profileImageUrl);
      }
    };
  }, [profileImageUrl]); // atau [] kalau gak mau rerun cleanup tergantung kasus

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return <EditProfile onCancel={handleCancelClick} onSave={handleSaveClick} />;
  }

  return (
    <div className="dashboard-container settings-page">
      <div className="settings-content">
        <h1 className="settings-title">Manage Profile</h1>

        <div className="profile-card">
          <div className="profile-avatar">
            <img
              src={profileImageUrl || "/placeholder.svg?height=120&width=120"}
              alt="User profile"
              width={120}
              height={120}
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{userData.username}</h2>
            <p className="profile-email">{userData.email}</p>
          </div>
        </div>

        <div className="form-actions">
          <button className="edit-btn" onClick={handleEditClick}>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
