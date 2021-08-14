import { Dashboard } from "./ui/Dashboard";
import { Insert } from "./ui/Insert";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { SearchEdit } from "./ui/SearchEdit";
import { Edit } from "./ui/Edit";
import { Login } from "./ui/Login";
import { Register } from "./ui/Register";
import { LandingPage } from "./ui/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/insert" component={Insert} />
        <Route path="/edit" exact component={SearchEdit} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
