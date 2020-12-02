import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'

export const SigninView = () => {

    const [username, setUsername] = useState()
    const [ , setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = ()=>{
        setAuthenticatedUser(username)
    }


    return (
        <div>
            <br/><br/>
            <span>Username : </span><input onChange={event => setUsername(event.target.value)} /> <br/><br/>
            <span>Password : </span><input type="password" onChange={event => setPassword(event.target.value)} /><br/><br/>
            <button onClick={()=>login()}>Login</button>
            <button onClick={()=>alert(authenticatedUser)}>Show authenticated User</button>
        </div>
    )
}
