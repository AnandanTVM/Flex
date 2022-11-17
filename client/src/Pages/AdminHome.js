import React, { useEffect } from 'react'
import { AdminNav } from '../Components'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'



function AdminHome() {
    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt(token);

            if (!user) {
                localStorage.removeItem('token')
                navigate('/admin');
            }
        } else {
            navigate('/admin');
        }
    }, [navigate])
    return (
        <div>
            <AdminNav />
            <h1>AdminHome</h1>
        </div>
    )
}

export default AdminHome
