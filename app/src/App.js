import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./screens/chat";
import Home from "./screens/home";
import Login from "./screens/login";
import "antd/dist/antd.css";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/login" exact component={Login} />
        <Route path="*" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
