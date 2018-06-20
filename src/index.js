import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// import { BrowserRouter } from "react-router-dom";
import HomePageR from "./js/LandingPage/Routes";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "react-redux";
import store, { history } from "Redux/store";
import { ConnectedRouter } from "react-router-redux";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <I18nextProvider i18n={i18n}>
                <HomePageR />
            </I18nextProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
