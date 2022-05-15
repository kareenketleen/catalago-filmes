import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/"></Route>
      <Route component={Cadastro} exact path="/cadastro"></Route>
    </BrowserRouter>
  );
};

export default Routes;
