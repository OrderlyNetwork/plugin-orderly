export const vaultAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccountIdInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "AddressZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "BalanceNotEnough",
    type: "error",
  },
  {
    inputs: [],
    name: "BrokerNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "EnumerableSetError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyCrossChainManagerCanCall",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroDepositFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "accountId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "depositNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "tokenHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenAmount",
        type: "uint128",
      },
    ],
    name: "AccountDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "accountId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "depositNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "tokenHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenAmount",
        type: "uint128",
      },
    ],
    name: "AccountDepositTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "accountId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "withdrawNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "brokerHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "tokenHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "fee",
        type: "uint128",
      },
    ],
    name: "AccountWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "ChangeCrossChainManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_tokenHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "ChangeTokenAddressAndAllow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_brokerHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_allowed",
        type: "bool",
      },
    ],
    name: "SetAllowedBroker",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_tokenHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_allowed",
        type: "bool",
      },
    ],
    name: "SetAllowedToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "allowedToken",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_tokenHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "changeTokenAddressAndAllow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crossChainManagerAddress",
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
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "accountId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "brokerHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "tokenHash",
            type: "bytes32",
          },
          {
            internalType: "uint128",
            name: "tokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct VaultTypes.VaultDepositFE",
        name: "data",
        type: "tuple",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositFeeEnabled",
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
    name: "depositId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "accountId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "brokerHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "tokenHash",
            type: "bytes32",
          },
          {
            internalType: "uint128",
            name: "tokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct VaultTypes.VaultDepositFE",
        name: "data",
        type: "tuple",
      },
    ],
    name: "depositTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyUnpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "enableDepositFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAllowedBroker",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAllowedToken",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_brokerHash",
        type: "bytes32",
      },
    ],
    name: "getAllowedBroker",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_tokenHash",
        type: "bytes32",
      },
    ],
    name: "getAllowedToken",
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
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "accountId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "brokerHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "tokenHash",
            type: "bytes32",
          },
          {
            internalType: "uint128",
            name: "tokenAmount",
            type: "uint128",
          },
        ],
        internalType: "struct VaultTypes.VaultDepositFE",
        name: "data",
        type: "tuple",
      },
    ],
    name: "getDepositFee",
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
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "messageTransmitterContract",
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
    name: "paused",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "dstDomain",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "rebalanceId",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "tokenHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "srcChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstChainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "dstVaultAddress",
            type: "address",
          },
        ],
        internalType: "struct RebalanceTypes.RebalanceBurnCCData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "rebalanceBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "rebalanceId",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "tokenHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "srcChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "messageBytes",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "messageSignature",
            type: "bytes",
          },
        ],
        internalType: "struct RebalanceTypes.RebalanceMintCCData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "rebalanceMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_brokerHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_allowed",
        type: "bool",
      },
    ],
    name: "setAllowedBroker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_tokenHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_allowed",
        type: "bool",
      },
    ],
    name: "setAllowedToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_crossChainManagerAddress",
        type: "address",
      },
    ],
    name: "setCrossChainManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rebalanceMessengerContract",
        type: "address",
      },
    ],
    name: "setRebalanceMessengerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenMessengerContract",
        type: "address",
      },
    ],
    name: "setTokenMessengerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenMessengerContract",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "accountId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "brokerHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "tokenHash",
            type: "bytes32",
          },
          {
            internalType: "uint128",
            name: "tokenAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "fee",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "withdrawNonce",
            type: "uint64",
          },
        ],
        internalType: "struct VaultTypes.VaultWithdraw",
        name: "data",
        type: "tuple",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
