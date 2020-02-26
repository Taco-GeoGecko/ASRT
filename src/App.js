import React, { Component } from "react";
import ResponsiveDrawer from "./Components/drawer";
import Orientation from "./Components/orientation";
import Analysis from './Components/Analysis';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  state = {
    redirect: true
  };
  render() {
    const notfound = () => {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to=" " />;
      }
    };
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={ResponsiveDrawer} />
            <Route path="/orientation" exact component={Orientation} />
            <Route path="/analysis" exact component={Analysis} />
            <Route component={notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
