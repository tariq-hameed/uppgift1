import React, {useEffect, useContext} from 'react'
import { AboutUsView } from '../view/AboutUsView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { SigninView } from '../view/SigninView'
import { UserContext } from '../shared/global/provider/UserProvider'

   


export const Routing = (props) => {

    const [, setAuthenticatedUser] = useContext(UserContext) 

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
                <Route exact path="/aboutus" component={AboutUsView} />
                <Route exact path="/signin" component={SigninView} />
                <Route component={HomeView} />
            </Switch>
            
        </Router>
    )
}
