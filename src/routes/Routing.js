import React from 'react'
import { RecipeView } from '../view/RecipeView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
   

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                   
                <Route exact path="/recipe" component={RecipeView} />
                <Route component={HomeView} />
            </Switch>
            
        </Router>
    )
}
