import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import registerServiceWorker from "./registerServiceWorker";
import store from "Redux/store";
import Root from "./Routes/Routes";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
