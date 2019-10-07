import React, {Fragment} from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Navbar from './Components/Navbar/Navbar'
import FullSizeImg from "./Components/FullSizeImg/FullSizeImg";
import NasaContextProvider from "./Context/NasaContext";

function App() {
  return (
    <div className="App">
      <NasaContextProvider>
        <Switch>
          <Route
            // exact path="/" component={Landing}
            exact
            path="/"
            render={props => (
              <Fragment>
                <Navbar/>
                <Landing />
              </Fragment>
            )}
          />
          <Route exact path="/full" component={FullSizeImg} />
        </Switch>
      </NasaContextProvider>
    </div>
  );
}

export default App;
