import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchPage from "Components/SearchPage/SearchPage";
import ResultsPage from "Components/ResultsPage/ResultsPage";

export const Navigation = () => {
  return (
    <BrowserRouter basename="/recipe-app">
      <Switch>
        <Route component={SearchPage} exact path="/" />
        <Route component={SearchPage} exact path="/search" />
        <Route component={ResultsPage} exact path="/recipes" />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
