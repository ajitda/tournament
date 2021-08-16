import React from "react";
import { Switch, Route } from "react-router-dom";
import errorPage from "./views/error/errorPage";
import tournament from "./views/tournament/tournament";
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={tournament} />
        <Route path=":error" component={errorPage} />
      </Switch>
    </div>
  );
}
