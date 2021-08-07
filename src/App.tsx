import { Dashboard } from "./pages/Dashboard";
import { Insert } from "./pages/Insert";
import { Route, BrowserRouter } from "react-router-dom";
import { SearchEdit } from "./pages/SearchEdit";
import { Edit } from "./pages/Edit";

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