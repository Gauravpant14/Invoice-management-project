import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const private=({component:component,isAuthenticated, ...rest})=>(
    <Route {...rest} render={props=>(

        isAuthenticated?(<Component {...props}/>):
        (<Redirect to={{pathname:'/login', state:{from:props.location}}}/>)

    )}/>
    );
    export default private;

