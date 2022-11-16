import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import UserNav from '../Components/UserNav/UserNav'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'

function Home() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')

    // async function populateQuote() {
    //     const req = await fetch('http://localhost:3001/api/quote', {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token'),
    //         },
    //     })
    //     const data = req.json()
    //     console.log(data);
    //     if (data.status === 'ok') {
    //         setQuete(data.quote)
    //     } else {
    //         alert(data.error)
    //     }
    // }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);

            setUserName(user.name);

            if (!user) {
                localStorage.removeItem('token')
                navigate('/');
            } else {
                // populateQuote()
            }
        } else {
            navigate('/');
        }
    }, [navigate])


    return (
        <div>
            <UserNav uname={userName} />

            <Footer />
        </div>
    )
}

export default Home
