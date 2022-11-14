import React from 'react'
import { Link } from 'react-router-dom'

function loginNav() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">Flex</Link>

                </div>
            </nav>
        </div>
    )
}

export default loginNav
