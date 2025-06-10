import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const Layout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const checkToken = async () => {
            try {
                const response = await axios.get('${API_URL}/api/auth/me', {
                    withCredentials: true,
                });

            } catch (error) {
                console.error('Token invalid atau tidak ada, stay di register');
                navigate('/login')
            }
            checkToken();
        }
    }, [navigate]);

    return <Outlet />
}

export default Layout