import { Dashboard } from "./ui/Dashboard";
import { Insert } from "./ui/Insert";
import { Route, BrowserRouter } from "react-router-dom";
import { SearchEdit } from "./ui/SearchEdit";
import { Edit } from "./ui/Edit";

function App() {
  return (
    <BrowserRouter>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/insert" exact component={Insert}/>
      <Route path="/edit" exact component={SearchEdit}/>
      <Route path="/edit/:id" exact component={Edit}/>
    </BrowserRouter>
  );
}

export default App;