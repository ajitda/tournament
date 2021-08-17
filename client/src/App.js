import React from "react";
import { Switch, Route } from "react-router-dom";

// Styles
import './assets/css/styles.css'

// Views
import errorPage from "./views/error/errorPage";
import home from "./views/home/home";
import tournament from "./views/tournament/tournament";
import profile from "./views/profile/profile";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/tournaments" component={tournament} />
        <Route path="/profile" component={profile} />
        <Route path=":error" component={errorPage} />

      </Switch>
    </div>
  );
}
