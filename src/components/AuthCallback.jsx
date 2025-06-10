import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));

    const accessToken = params.get("access_token");

    if (!accessToken) {
      navigate("/login");
      return;
    }

    fetch(
      `${API_URL}/api/auth/callback?access_token=${accessToken}`,
      {
        method: "get",
        credentials: "include",
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Token verification failed");
        return res.json();
      })
      .then(() => {
        navigate("/app");
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate]);

  return <div>Logging you in...</div>;
}
