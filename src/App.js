import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Onboarding1 from "./Onboarding/Onboarding1";
import Onboarding2 from "./Onboarding/Onboarding2";
import Onboarding3 from "./Onboarding/Onboarding3";
import SignUp from "./Register/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/onboarding1" component={Onboarding1} />
        <Route exact path="/onboarding2" component={Onboarding2} />
        <Route exact path="/onboarding3" component={Onboarding3} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
