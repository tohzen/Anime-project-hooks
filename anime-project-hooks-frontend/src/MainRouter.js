import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Auth from "./components/Auth/Auth";
// import Home from "./components/Home/Home";
// import NotFound from "./components/NotFound/NotFound";

import AnimeState from "./components/Anime/AnimeState";

const Home = React.lazy(() => import("./components/Home/Home"));
const Auth = React.lazy(() => import("./components/Auth/Auth"));
const NotFound = React.lazy(() => import("./components/NotFound/Notfound"));
const Protected = React.lazy(() => import("./components/Protected/Protected"));
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const AnimeDetails = React.lazy(() => import("./components/Anime/AnimeDetails"));


function MainRouter() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/sign-up" component={Auth} />
    <Route exact path="/login" component={Auth} />
    <Route exact path="/logout" render={() => <Redirect to="/login" />} />
    
    
    <PrivateRoute exact path="/protected" component={Protected} />
    <PrivateRoute exact path="/profile" component={Profile} />
    
    <AnimeState>
      <Route exact path="/" component={Home} />
      <Route exact path="/AnimeDetails/:id" component={AnimeDetails} />
    </AnimeState>

    
    <Route component={NotFound} />
    </Switch>
    </>
    );
  }
  
  export default MainRouter;