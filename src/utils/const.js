export const moralis = {
	BNB_TEST: "https://bsc-dataseed.binance.org",
	TEST_SERVER_URL: "https://l9waxnciy0zk.usemoralis.com:2053/server",
	TEST_APP_ID: "l5NbtzKDRmiHoz9VHPSwZBCv6NJEQ5a2oQrP6VKt",
	CONTRACT_ADDRESS: "0xDc2034D93f7A9d73E0A6e30D889cf35866fF5b25",
	MLOKY_CONTRACT: "0x11C97Fc75E1ecf0F7315c0f7c15cF94782795aE3",
	MLOKY_DECIMAL: 9,
	BUSD_CONTRACT: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
	BUSD_DECIMAL: 18,
	LUCHOW_CONTRACT: "0xe4e8e6878718bfe533702D4a6571Eb74D79b0915",
	LUCHOW_DECIMAL: 18,
	CHAIN_IDX: 56,
	CHAIN_ID_HEX_CHECKER: "0x38",
	IBEP_20_ABI: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "spender",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "value",
					type: "uint256",
				},
			],
			name: "Approval",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "from",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "to",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "value",
					type: "uint256",
				},
			],
			name: "Transfer",
			type: "event",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					internalType: "address",
					name: "spender",
					type: "address",
				},
			],
			name: "allowance",
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
					name: "spender",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "approve",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
			],
			name: "balanceOf",
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
			name: "totalSupply",
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
					name: "recipient",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "transfer",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "sender",
					type: "address",
				},
				{
					internalType: "address",
					name: "recipient",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "transferFrom",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "nonpayable",
			type: "function",
		},
	],
	ABI_CONTRACT: [
		{
			inputs: [
				{
					internalType: "address",
					name: "_router",
					type: "address",
				},
			],
			stateMutability: "nonpayable",
			type: "constructor",
		},
		{
			inputs: [],
			name: "claimDividend",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			name: "depositBUSD",
			outputs: [],
			stateMutability: "payable",
			type: "function",
		},
		{
			inputs: [],
			name: "depositLUCHOW",
			outputs: [],
			stateMutability: "payable",
			type: "function",
		},
		{
			inputs: [],
			name: "dividendsPerShare",
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
			name: "dividendsPerShareAccuracyFactor",
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
					name: "shareholder",
					type: "address",
				},
			],
			name: "getUnpaidEarnings",
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
			name: "minDistribution",
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
			name: "minPeriod",
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
					internalType: "uint256",
					name: "gas",
					type: "uint256",
				},
			],
			name: "process",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "_minPeriod",
					type: "uint256",
				},
				{
					internalType: "uint256",
					name: "_minDistribution",
					type: "uint256",
				},
			],
			name: "setDistributionCriteria",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "shareholder",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "setShare",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "",
					type: "address",
				},
			],
			name: "shares",
			outputs: [
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
				{
					internalType: "uint256",
					name: "totalExcluded",
					type: "uint256",
				},
				{
					internalType: "uint256",
					name: "totalRealised",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "totalDistributed",
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
			name: "totalDividends",
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
			name: "totalShares",
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
	],
};
