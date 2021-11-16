import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import BlogGridPage from "./Pages/BlogGridPage";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={BlogGridPage} />
          <ScrollToTopRoute
            exact={true}
            path={"/Contact"}
            component={Contact}
          />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
