import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
export default function rotes() {
    return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    );
}