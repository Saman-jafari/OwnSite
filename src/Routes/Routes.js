import React from "react";
// import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {I18nextProvider} from "react-i18next";
import i18n from "i18n";
import HomePage from "../Container/HomePage";


//router Component
const Root = ({store}) => (
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <Router>
                <Route path="/" component={HomePage}/>
            </Router>
        </I18nextProvider>
    </Provider>
);


export default Root
