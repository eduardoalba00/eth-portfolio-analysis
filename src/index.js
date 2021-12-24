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
		<Provider store={store}>
			<DAppProvider config={{}}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</DAppProvider>
		</Provider>
	</HelmetProvider>,

	document.getElementById("root")
);
