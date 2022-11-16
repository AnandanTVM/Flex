import React from 'react'
import { useNavigate } from 'react-router-dom'
function UserNav(props) {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')

    }
    return (
        <div className='vh-100'>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/userHome">flex</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/userHom">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/userHom">Profile</a>
                            </li>


                        </ul>

                    </div>

                    <ul className="navbar-nav">
                        <li className="nav-item d-flex">
                            <span className="nav-link" style={{ color: "white" }} ><b><i>welcome {props.uname}</i></b></span>
                            <span className="nav-link" onClick={logout}>Logout</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default UserNav
