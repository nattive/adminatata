import React from "react";
import Typography from "@material-ui/core/Typography";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Views/dasboard/Dashboard";
import SignInView from "./Auth/Signin/SignInView";
import { Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth">
          <SignInView />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
      <Copyright />
    </BrowserRouter>
  );
}
