import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import Chatbot from "./components/Chatbot";
import Courses from "./components/Courses";
import GrammarChecker from "./components/GrammarChecker";
import Settings from "./components/Settings";
import "./styles.css";
import "./setting.css";
import Cookies from "js-cookie";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function App() {
  const [activeItem, setActiveItem] = useState("overview");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/auth/me`, {
          withCredentials: true,
        });

        console.log(response);

        // Jika berhasil
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        console.error("Token tidak valid. Redirect ke login.");
        // navigate("/login");
      }
    };

    checkToken();
  }, [navigate]);

  // Logout
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      setActiveItem("logout");

      setTimeout(async () => {
        try {
          await axios.post(
            `${API_URL}/api/auth/logout`,
            {},
            { withCredentials: true }
          );

          Cookies.remove("token", {
            path: "/",
            domain: window.location.hostname,
          });

          localStorage.removeItem("user");
          setIsAuthenticated(false);
          navigate("/");
        } catch (err) {
          console.error("Logout gagal:", err);
          setIsLoggingOut(false);
          setActiveItem("overview");
        }
      }, 500);
    } catch (err) {
      console.error("Logout error:", err);
      setIsLoggingOut(false);
    }
  };

  // Tangani item aktif
  const handleSetActiveItem = (item) => {
    if (item === "logout") {
      handleLogout();
    } else {
      setActiveItem(item);
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case "overview":
        return <Overview setActiveItem={handleSetActiveItem} />;
      case "chatbot":
        return <Chatbot />;
      case "courses":
        return <Courses />;
      case "grammarchecker":
        return <GrammarChecker userId={"default-user"} />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  // Loading screen saat autentikasi belum selesai
  if (!isAuthenticated) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>{isLoggingOut ? "Logging out..." : "Loading..."}</p>
      </div>
    );
  }

  return (
    <div className="app-content">
      <Sidebar activeItem={activeItem} setActiveItem={handleSetActiveItem} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
