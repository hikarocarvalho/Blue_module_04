import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Perfil from "./pages/perfil/Perfil";
import Manager from "./pages/manager/Manager";
import Library from "./pages/library/Library";
import NotFound from "./pages/notFound/NotFound";
export default function Routes(){
    return(
        <Switch>
            <Route exact path="/">
                <Login></Login>
            </Route>
            <Route exact path="/register">
                <Register></Register>
            </Route>
            <Route exact path="/perfil">
                <Perfil></Perfil>
            </Route>
            <Route exact path="/library">
                <Library></Library>
            </Route>
            <Route exact path="/manager">
                <Manager></Manager>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    );
}