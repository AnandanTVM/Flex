import React from 'react'
import { useSelector } from 'react-redux'

function CounterBtn() {
    const { userDeatils } = useSelector((state) => state.user)
    console.log(userDeatils[0]);

    return (
        <div>
            <h1>igdhsgjhsjkhfkgfskj</h1>
            {userDeatils[0] ? <span>details :{userDeatils[0].name} </span> : " "}

        </div>
    )
}

export default CounterBtn
