import React, { useEffect } from 'react'
import LoginForm from '../Components/LoginForm/LoginForm'
import LoginNav from '../Components/LoginNav/Loginnav'
import Footer from '../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'


function Login() {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);
            console.log("iam here");
            console.log(user);
            console.log(token);
            if (user) {
                navigate('/userHome');
            }
        } else {
            navigate('/');
        }
    }, [navigate])
    return (
        <div>
            <LoginNav />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login
