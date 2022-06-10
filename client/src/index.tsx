import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {DAppProvider} from "@usedapp/core";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={{}}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
