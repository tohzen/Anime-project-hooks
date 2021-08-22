import React, {useContext} from "react"
import { Route, Redirect } from "react-router-dom"

import {AuthContext} from '../../context/AuthContext'

function PrivateRoute({component: Component, ...rest}) {

    const {state: user } = useContext(AuthContext); 
    return (
        <Route 
        {...rest}
        render= {(props) => 
        user ? <Component {... props} /> : <Redirect to="/login" /> 
    }
    />

    );
}
export default PrivateRoute;