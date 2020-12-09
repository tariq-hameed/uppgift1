import React, {useEffect, useContext} from 'react'
import { AboutUsView } from '../view/AboutUsView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { SigninView } from '../view/SigninView'
import { UserContext } from '../shared/global/provider/UserProvider'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SettingsView'
import RoutingPath from './RoutingPath'
   


export const Routing = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext) 

    const blockRoutesIfAuthenticated = (navigateToView) =>{
        return authenticatedUser ? HomeView : navigateToView
    }

    const blockRoutesIfNotAuthenticated = (navigateToView) =>{
        return !authenticatedUser ? SigninView : navigateToView
    }

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

   

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])

    return (
        <Router>
            {props.children} 
            <Switch> 
                <Route exact path={RoutingPath.aboutUsView} component={AboutUsView} />
                <Route exact path={RoutingPath.signInView} component={blockRoutesIfAuthenticated(SigninView)} />
                <Route exact path={RoutingPath.profileView} component={blockRoutesIfNotAuthenticated(ProfileView)} />
                <Route exact path={RoutingPath.settingsView} component={blockRoutesIfNotAuthenticated(SettingsView)} />
                <Route component={HomeView} />
            </Switch>
            
        </Router>
    )
}
