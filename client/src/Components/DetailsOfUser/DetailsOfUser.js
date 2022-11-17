import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'

function DetailsOfUser() {
    const navigate = useNavigate()
    const [details, SetDetails] = useState([])

    async function getuserdetails() {
        console.log("iam here");
        const req = await fetch('http://localhost:3001/admin/api/userDetails', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const data = await req.json()

        if (data.status === 'ok') {
            SetDetails(data.userDetails)
        } else {
            alert(data.error)
        }
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);

            if (!user) {
                localStorage.removeItem('token')
                navigate('/admin');
            } else {
                getuserdetails()
            }
        } else {
            navigate('/admin');
        }
    }, [navigate])

    return (
        <div className='container'>
            <div>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Slno</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((data, index) => {
                            return (
                                < tr className="table-info" key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td></td>
                                </tr>
                            )
                        })
                        }


                    </tbody>
                </table>
            </div>

        </div >
    )

}
export default DetailsOfUser
