import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Home from "./Pages/Home";
import NotFound from "./Pages/404";

export default function App(props){
  useEffect(()=>{
    props.hideLoader();
  }, [])
  
  return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute
            exact={true}
            path={"/contact"}
            component={Contact}
          />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }

