import React, {useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
/*------ Pages-----*/
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Privacy from "./Pages/Privacy";
import TnC from "./Pages/TnC";
import NotFound from "./Pages/404";

export default function App(props){
  // const {hideLoader}=props;
  useEffect(()=>{
    props.hideLoader();
  })
  
  return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute
            exact={true}
            path={"/contact"}
            component={Contact}
          />
          <ScrollToTopRoute component={Privacy} exact={true}
            path={"/privacy"}/>
          <ScrollToTopRoute component={TnC} exact={true}
            path={"/tnc"} />
          <ScrollToTopRoute component={NotFound} />

        </Switch>
      </Router>
    );
  }

