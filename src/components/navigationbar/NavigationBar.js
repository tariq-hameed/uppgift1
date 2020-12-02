import React from 'react'
import './NavigationBar.css'
import LogoType from '../../shared/images/logotype.svg'
import { useHistory} from 'react-router-dom'

export const NavigationBar = () => {
    
    const history = useHistory();

    return (
        <div className="navBar">
            <img onClick={() =>history.push('/')}
                className="logotype" src={LogoType} alt="Error .."
            />
            <span onClick={()=>history.push('/recipe')} className="recipe">Recipe</span>
        </div>
    )
}
