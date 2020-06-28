import ReactDOM from 'react-dom';
import React from 'react';
import App from "./app";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'))
