import {Box, List, ListIcon, ListItem} from "@chakra-ui/react";
import { MdSupervisorAccount} from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { UsePolls } from "../hooks";

export default function VoteList() {
    const navigate = useNavigate();
    const polls = UsePolls();


    function handleClick(item: any) {
        console.log("item clicked", item.title);
        navigate(`/${item.id}`)
    }

    return (
        <Box className={"listContainer"}>
                <List spacing={3}>
                    {
                        polls ? polls.map((item: any, index: number) => (
                            <ListItem key={index} className={"voteItem"} onClick={() => handleClick(item)}>
                                <ListIcon as={MdSupervisorAccount} color='green.500' />
                                {`${item.id ? item.id.toNumber() : ""} - ${item.title}`}
                            </ListItem>
                        )) : <></>
                    }
                </List>
        </Box>
    )
};