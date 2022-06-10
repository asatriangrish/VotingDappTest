import {Box, List, ListIcon, ListItem} from "@chakra-ui/react";
import { MdSupervisorAccount} from "react-icons/all";
import { useNavigate } from "react-router-dom";

export default function VoteList() {
    const navigate = useNavigate();

    const data = [
        {
            id: 0,
            title: "vote-1",
            options: "Voting By Mail",
            voteResult: "success"
        },
        {
            id: 1,
            title: "vote-2",
            options: "Voting By Mail",
        },
        {
            id: 2,
            title: "vote-3",
            options: "Early Voting",
            voteResult: "success"
        },
        {
            id: 3,
            title: "vote-4",
            options: "Early Voting",
            voteResult: "success"
        },
        {
            id: 4,
            title: "vote-5",
            options: "Early Voting",
            voteResult: "success"
        },
        {
            id: 5,
            title: "vote-6",
            options: "Election Day Voting",
            voteResult: "success"
        },
        {
            id: 6,
            title: "vote-7",
            options: "Election Day Voting",
            voteResult: "success"
        },
        {
            id: 7,
            title: "vote-8",
            options: "Election Day Voting",
            voteResult: "success"
        },
        {
            id: 8,
            title: "vote-9",
            options: "Election Day Voting",
            voteResult: "success"
        },
        {
            id: 9,
            title: "vote-10",
            options: "Election Day Voting",
            voteResult: "success"
        },
        {
            id: 10,
            title: "vote-11",
            options: "Election Day Voting",
            voteResult: "success"
        },
        {
            id: 11,
            title: "vote-12",
            options: "Voting By Mail",
            voteResult: "success"
        }

    ]

    function handleClick(item: any) {
        console.log("item clicked", item.title);
        navigate(`/${item.id}`)
    }

    return (
        <Box className={"listContainer"}>
                <List spacing={3}>
                    {
                        data.map((item, index) => (
                            <ListItem key={item.id} className={"voteItem"} onClick={() => handleClick(item)}>
                                <ListIcon as={MdSupervisorAccount} color='green.500' />
                                {item.title}
                            </ListItem>
                        ))
                    }
                </List>
        </Box>
    )
};