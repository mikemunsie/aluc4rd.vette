import { Redirect, Switch, Route, HashRouter} from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import carImage from "./assets/car.jpg";
import Parts from "./pages/Parts";
import Header from "./components/Header";

enum RoutePaths {
  home = "/",
  parts = "/parts"
}

const StyledCarImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: url(${carImage});
  background-size: cover;
  opacity: 1;
`

export default function Routes() {
  return (
    <HashRouter>
      <StyledCarImage />
      <Header />
      <Switch>
        <Route exact path={RoutePaths.home}>
          <Home />
        </Route>
        <Route exact path={RoutePaths.parts}>
          <Parts />
        </Route>
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )


}