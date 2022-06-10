import {Contract, ethers} from "ethers";
import {useCall, useContractFunction} from "@usedapp/core";
import {VOTING_ABI, VOTING_FACTORY_ADDRESS, VOTING_FACTORY_ABI} from "../config";

const contractInterface = new ethers.utils.Interface(VOTING_FACTORY_ABI);

export function UsePolls() {
    const contract = new Contract(VOTING_FACTORY_ADDRESS, contractInterface);
    const {value, error}: any = useCall({
        contract: contract,
        method: 'getPolls',
        args: [],
    }) ?? {};

    if (error) {
        console.log("error occured==========>", error);
    }
    return value && value.length > 0 ? value[0] : value;
}

export function UseContractMethod(address: string, methodName: string) {
    const pollInterface = new ethers.utils.Interface(VOTING_ABI);
    const contract = new Contract(address, pollInterface);
    const { state, send } = useContractFunction(contract, methodName,  {});
    return {state, send};
}

export function UseHasVoted(address: string, account: string) {
    const pollInterface = new ethers.utils.Interface(VOTING_ABI);
    const contract = new Contract(address, pollInterface);
    const {value, error}: any = useCall({
        contract,
        method: "hasVoted",
        args: [account]
    }) ?? {};
    if (error) {
        console.log("error occured==========>", error);
    }
    return value && value.length > 0 ? value[0] : value;
}
