import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Description from "./pages/Description";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/"></Route>
      <Route component={Cadastro} exact path="/cadastro"></Route>
      <Route component={Description} exact path="/description/:id"></Route>
    </BrowserRouter>
  );
};

export default Routes;
