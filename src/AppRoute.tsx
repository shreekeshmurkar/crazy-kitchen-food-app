import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Recipies = lazy(() => import("./pages/Recipies"));

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Recipies" component={Recipies} />
    </Switch>
  );
}
