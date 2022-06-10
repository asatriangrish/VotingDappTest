import {Badge, Box, Button, Radio, RadioGroup, Spinner, Stack} from "@chakra-ui/react";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {UseContractMethod, UseHasVoted, UsePolls} from "../hooks";
import {BigNumber} from "ethers";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {useEthers} from "@usedapp/core";



export default function SingleVote() {
    const navigate = useNavigate();
    const {  account } = useEthers();
    const params = useParams();
    let polls = UsePolls();
    const [value, setValue] = useState('1')
    const [isLoading, setIsLoading] = useState(false);
    const [poll, setPoll] = useState({
        id: BigNumber.from(0),
        title: "demo title",
        options: ["option1", "option2"],
        addr: "0xbb2F927bc92D68ce518dD2e626ABe948671d191B"
    });
    const address = poll.addr;

    const { state, send } = UseContractMethod(address, "vote");

    const hasVoted = UseHasVoted(address, account? account : "");

    useEffect(() => {
        const id = parseInt(params["id"] ? params["id"] : "0");
        setPoll(polls[id]);
    }, []);

    async function handleVote() {
        setIsLoading(true);
        await send(parseInt(value));
        setIsLoading(false);
    }
    return (
        <Box className="singleContainer">
            <Button rightIcon={<ArrowBackIcon />} colorScheme='teal' variant='outline' className="backButton" onClick={() => navigate(-1)}>
                Back
            </Button>
            {
                hasVoted ? <div className="informArea">
                    <Badge variant='outline' colorScheme='green' fontSize='3em'>
                        You already voted !!!
                    </Badge>
                </div> : <></>
            }

            <div className="oneRow">
                Vote ID : {poll ? poll.id.toNumber() : ""}
            </div>
            <div className="oneRow">
                Vote Title : {poll ? poll.title : ""}
            </div>
            <div className="oneRow">
                Vote Address : {poll ? poll.addr : ""}
            </div>
            <div className="oneRow">
                Vote Options
                <RadioGroup onChange={setValue} value={value} style={{paddingLeft: "30px", marginTop: "10px"}}>
                    <Stack>
                        {
                            poll.options.map((item, index) => (
                                <Radio value={(index + 1).toString()} key={index}>{item}</Radio>
                            ))
                        }
                    </Stack>
                </RadioGroup>
            </div>
            <div className="buttonArea">
                {
                    !hasVoted ? <div className="oneRow">
                        <Button colorScheme='teal' variant='outline' style={{padding: '0 80px'}} onClick={handleVote} disabled={isLoading}>
                            {isLoading ? <Spinner
                                thickness='2px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='md'
                            /> : <>Vote</>}
                        </Button>
                    </div> : <></>
                }
            </div>
        </Box>
    )
};