import React, {useContext} from 'react'
import './NavigationBar.css'
import LogoType from '../../shared/images/logotype.svg'
import { useHistory} from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { Profile } from '../profile/Profile'
import RoutingPath from '../../routes/RoutingPath'

export const NavigationBar = () => {
    
    const history = useHistory();
    const [authenticatedUser, ] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
		return authenticatedUser
			? <div className="profile"><Profile /></div>
            : <span onClick={()=>history.push(RoutingPath.signInView)} className="signin">SignIn</span>
    }

    return (
        <div className="navBar">
            <img onClick={() =>history.push(RoutingPath.homeView)}
                className="logotype" src={LogoType} alt="Error .."/>
            <span onClick={()=>history.push(RoutingPath.aboutUsView)} className="recipe">About Us</span>            
            {displayUserIfAuthenticated()}

            
        </div>
        
    )
}
