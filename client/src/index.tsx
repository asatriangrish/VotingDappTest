import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Config, DAppProvider, Mainnet, Rinkeby, Ropsten} from "@usedapp/core";
import {BrowserRouter} from "react-router-dom";
import {MAINNET_URL, RINKEBY_URL, ROPSTEN_URL} from "./config";

const config: Config = {
    readOnlyChainId: Rinkeby.chainId,
    readOnlyUrls: {
        [Rinkeby.chainId]: RINKEBY_URL,
        [Ropsten.chainId]: ROPSTEN_URL,
        [Mainnet.chainId]: MAINNET_URL,
    },
}

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={config}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
