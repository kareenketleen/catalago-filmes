import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import PostMovie from "./pages/PostMovie";
import Description from "./pages/Description";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/"></Route>
      <Route component={PostMovie} exact path="/post-movie"></Route>
      <Route component={Description} exact path="/description/:id"></Route>
    </BrowserRouter>
  );
};

export default Routes;
