import {Box, Container, List, ListIcon, ListItem} from "@chakra-ui/react";
import { useNavigate, Outlet } from "react-router-dom";


export default function VoteIndex() {

    return (
        <Box>
            This is votes page
           <Outlet/>
        </Box>
    )
};