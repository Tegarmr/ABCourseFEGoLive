import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const AccessLogger = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [materiId, setMateriId] = useState(null);

  useEffect(() => {
    // Ambil user ID dari API /api/auth/me
    const fetchUserId = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/auth/me`, {
          withCredentials: true,
        });
        const uid = res.data.user.userId;
        setUserId(uid);
        console.log("User ID:", uid);
      } catch (error) {
        console.error("Failed to fetch user id:", error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const getMateriIdAndLog = async () => {
      try {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        if (pathSegments.length === 0) return;

        const materiName = pathSegments[pathSegments.length - 1]; // ambil segment terakhir
        if (!materiName) return;

        // Panggil API materi dengan filter null (ambil semua)
        const res = await axios.get(`${API_URL}/api/materi`, {
          params: { filter: null },
          withCredentials: true,
        });

        const materiList = res.data.data.materi || [];
        const foundMateri = materiList.find(
          (m) => m.nama_materi.toLowerCase() === materiName.toLowerCase()
        );

        if (!foundMateri) {
          console.warn("Materi not found for", materiName);
          return;
        }

        // Cek apakah materi terkunci
        if (foundMateri.isLocked) {
          // Redirect ke halaman utama jika locked
          console.warn("Materi is locked. Redirecting...");
          navigate("/app", { replace: true });
          return;
        }

        setMateriId(foundMateri.materi_id);
        console.log("Materi ID:", foundMateri.materi_id);

        // Log akses materi ke backend
        await axios.post(
          `${API_URL}/api/materi/log`,
          {
            user_id: userId,
            materi_id: foundMateri.materi_id,
          },
          { withCredentials: true }
        );
      } catch (error) {
        console.error("Failed to log access:", error);
      }
    };

    getMateriIdAndLog();
  }, [location.pathname, userId, navigate]);

  return children;
};

export default AccessLogger;
