import {ChakraProvider, useDisclosure} from "@chakra-ui/react";
import { Outlet, Route, Routes } from 'react-router-dom';

import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import "./App.css"
import VoteList from "./components/VoteList";
import SingleVote from "./components/SingleVote";
import NotFound from "./components/NotFound";

function App() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <ChakraProvider theme={theme}>
            <AccountModal isOpen={isOpen} onClose={onClose}/>
            <Routes>
                <Route path="/" element={
                    <Layout>
                        <ConnectButton handleOpenModal={onOpen}/>
                        <Outlet/>
                    </Layout>
                }>
                    <Route index element={<VoteList/>} />
                    <Route path=":id" element={<SingleVote/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </ChakraProvider>
    );
}

export default App;
