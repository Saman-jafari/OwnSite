import React from "react";
// import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n";
import HomePage from "../Container/HomePage";
import Photography from "../Container/Photography";
import Cinematography from "../Container/Cinematography";
import Audio from "../Container/Audio";
import Contact from "../Container/Contact";

//router Component
const Root = ({ store }) => (
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/Photography" component={Photography} />
                    <Route path="/Cinematography" component={Cinematography} />
                    <Route path="/Audio" component={Audio} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
            </Router>
        </I18nextProvider>
    </Provider>
);

export default Root;
