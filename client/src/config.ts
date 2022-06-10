export const RINKEBY_URL='https://rinkeby.infura.io/v3/4cd67d7b320b4dbf91215ffb36924b71'
export const ROPSTEN_URL='https://rinkeby.infura.io/v3/4cd67d7b320b4dbf91215ffb36924b71'
export const MAINNET_URL='https://rinkeby.infura.io/v3/4cd67d7b320b4dbf91215ffb36924b71'

export const VOTING_FACTORY_ADDRESS='0x2dB22e6d8aB7D198C40fa9a13271CE56A56C76eE'
export const VOTING_FACTORY_AVI=[
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "pollId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "title",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string[]",
                name: "options",
                type: "string[]",
            },
        ],
        name: "PollCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_title",
                type: "string",
            },
            {
                internalType: "string[]",
                name: "options",
                type: "string[]",
            },
        ],
        name: "createPoll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getPolls",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "addr",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "title",
                        type: "string",
                    },
                    {
                        internalType: "string[]",
                        name: "options",
                        type: "string[]",
                    },
                ],
                internalType: "struct VotingFactory.Poll[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pollCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
]
export const VOTING_AVI=[
    {
        inputs: [
            {
                internalType: "string",
                name: "_title",
                type: "string",
            },
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "voter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "option",
                type: "uint256",
            },
        ],
        name: "Voted",
        type: "event",
    },
    {
        inputs: [],
        name: "getVoteResult",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_voter",
                type: "address",
            },
        ],
        name: "hasVoted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "title",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_option",
                type: "uint256",
            },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]