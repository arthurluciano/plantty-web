import { Route, Switch } from "react-router-dom";

import { Dashboard } from "src/ui/Dashboard";
import { Edit } from "src/ui/Edit";
import { Insert } from "src/ui/Insert";
import { LandingPage } from "src/ui/LandingPage";
import { Loading } from "src/ui/Loading";
import { Login } from "src/ui/Login";
import { Register } from "src/ui/Register";
import { SearchEdit } from "src/ui/SearchEdit";
import { PrivateRoute } from "../PrivateRoute";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/test" component={Loading} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/insert" component={Insert} />
      <PrivateRoute path="/edit" exact component={SearchEdit} />
      <PrivateRoute path="/edit/:id" component={Edit} />
    </Switch>
  );
}
