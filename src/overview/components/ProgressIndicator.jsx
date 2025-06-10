import { useState, useEffect } from 'react';
import "../css/ProgressIndicator.css";

const API_URL = import.meta.env.VITE_API_URL;

const ProgressIndicator = ({ userId }) => {
  const [progress, setProgress] = useState({
    progressPercentage: 0,
    isCompleted: false,
    totalMaterials: 0,
    completedMaterials: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/progress`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include' // Important for sending cookies
        });

        if (!response.ok) {
          throw new Error('Failed to fetch progress data');
        }

        const data = await response.json();
        if (data.data && data.data.progress) {
          setProgress(data.data.progress);
        } else {
          // If no progress data yet, set default values
          setProgress({
            progressPercentage: 0,
            isCompleted: false,
            totalMaterials: 0,
            completedMaterials: 0
          });
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching progress:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    // Only fetch if we have a userId
    if (userId) {
      fetchProgress();
    } else {
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return <div className="progress-loading">Loading progress...</div>;
  }

  if (error) {
    return null; // Don't show anything if there's an error
  }

  // If user is not logged in, don't show progress
  if (!userId) {
    return null;
  }

  return (
    <div className="progress-container">
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress.progressPercentage}%` }}
        ></div>
      </div>
      <div className="progress-text">
        {progress.isCompleted ? (
          <span className="progress-completed">Course Completed!</span>
        ) : (
          <span className="progress-in-progress">
            {progress.progressPercentage}% Completed ({progress.completedMaterials}/{progress.totalMaterials})
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressIndicator; 