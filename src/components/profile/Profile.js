import React, {useContext} from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import './Profile.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const Profile = () => {

    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser ] = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem('username')
        setAuthenticatedUser(false)
        history.push(RoutingPath.signInView)
    }

    return (
        <div className="profileWrapper">
            <img className="profileImage" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUserName">{authenticatedUser}</span>
            <div className="profileDropDownMenu">
                <a onClick={()=> history.push(RoutingPath.settingsView)}>Settings</a>
                <a onClick={()=> history.push(RoutingPath.profileView)}>Profile</a>
                <hr/>
                <a onClick={() => logout()}>LogOut</a>
            </div>
        </div>
    )
}
