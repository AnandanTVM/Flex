import React, { useState } from 'react'
import '../LoginForm/LoginForm.css'
import { Link } from 'react-router-dom'
function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    async function loginUser(event) {
        event.preventDefault()
        console.log("started verifing");
        const responce = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email,
                password
            }),
        })
        const data = await responce.json()
        console.log(data);
        if (data.user) {
            localStorage.setItem('token', data.user)
            window.location.href = '/userHome'
        } else {
            setError('Invalid Email/Password..')
        }
    }

    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"}
                                className="img-fluid" alt={"Sample "} />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={loginUser}>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                                </div>
                                {error ? <p style={{ color: "red" }} className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">{error}</p> : " "}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" >Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    <label className="form-label">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" >
                                            Remember me
                                        </label>
                                    </div>

                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/singup"
                                        className="link-danger">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div >

            </section >
        </div >

    )
}

export default LoginForm
