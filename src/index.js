import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <HelmetProvider>
        <BrowserRouter>
            <Provider store={store}>
                <DAppProvider config={{}}>
                    <App />
                </DAppProvider>
            </Provider>
        </BrowserRouter>
    </HelmetProvider>,

    document.getElementById("root")
);
