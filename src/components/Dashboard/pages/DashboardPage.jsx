import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../styled";
import LunachowImg from "../../../assets/images/lunachow.png";
import MlokyImg from "../../../assets/images/mloky.png";
import ChainhowImg from "../../../assets/images/chain.png";
import {
	useMoralis,
	useMoralisWeb3Api,
	useWeb3ExecuteFunction,
} from "react-moralis";
// import Web3 from 'web3';
import { Moralis } from "moralis";
import Web3 from "web3";
import Contract from "web3-eth-contract";
import { moralis } from "../../../utils/const";

const DashboardPage = () => {
	const classes = useStyles();

	const [ethAddress, setEthAddress] = useState("");

	Moralis.start({
		appId: moralis.TEST_APP_ID,
		serverUrl: moralis.TEST_SERVER_URL,
	});

	const { user } = useMoralis();
	const Web3API = useMoralisWeb3Api();
	const { data, error, fetch } = useWeb3ExecuteFunction();

	console.log(data, error);

	useEffect(() => {
		if (user) setEthAddress(user.get("ethAddress"));
		else setEthAddress("");

		// Web3API.account
		// 	.getNativeBalance({
		// 		chain: "eth",
		// 		address: moralis.BUSD_CONTRACT,
		// 	})
		// 	.then((r) => console.log(r));

		// Web3API.account
		// 	.getNativeBalance({
		// 		chain: "eth",
		// 		address: moralis.LUCHOW_CONTRACT,
		// 	})
		// 	.then((r) => console.log(r));

		// Web3API.account
		// 	.getTokenBalances({
		// 		chain: "eth",
		// 		address: moralis.BUSD_CONTRACT,
		// 	})
		// 	.then((r) => console.log(r));
	}, [user]);

	useEffect(() => {
		const getMloky = async () => {
			// const web3 = new Web3();
			// console.log(web3);
			// const contract = new web3.eth.Contract(
			// 	moralis.IBEP_20_ABI,
			// 	moralis.MLOKY_CONTRACT
			// );

			const options = {
				contactAddress: moralis.CONTRACT_ADDRESS,
				functionName: "getUnpaidEarnings",
				abi: [
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
				],
				params: {
					shareholder: moralis.MLOKY_CONTRACT,
				},
			};

			await Moralis.enableWeb3();
			console.log(ethAddress);

			await fetch({
				params: options,
			});

			// const contract = new Contract(
			// 	moralis.IBEP_20_ABI,
			// 	moralis.MLOKY_CONTRACT
			// );

			// await contract.methods
			// 	.balanceOf(moralis.MLOKY_CONTRACT)
			// 	.call(async (err, result) => {
			// 		console.log(result);
			// 		console.log(err);
			// 	});

			// const a = await Moralis.Web3API.native.runContractFunction({
			// 	chain: "bsc",
			// 	address: moralis.CONTRACT_ADDRESS,
			// 	function_name: "balanceOf",
			// 	abi: moralis.IBEP_20_ABI,
			// 	params: {
			// 		account: moralis.MLOKY_CONTRACT,
			// 	},
			// });

			// console.log(a);
		};

		if (user && ethAddress) getMloky();
	}, [user, ethAddress]);

	return (
		<Box>
			<Box mt={5}>
				<TextField
					className={classes.textField}
					fullWidth
					id="outlined-basic"
					label="Wallet Address"
					variant="outlined"
					value={ethAddress}
					onChange={(e) => setEthAddress(e.target.value)}
				/>
			</Box>

			<Box my={4}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography
									className={classes.cardTitle}
									gutterBottom
								>
									$MLOKY Balance:
								</Typography>
								<Typography
									className={classes.cardDesc}
									color="text.secondary"
								>
									0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography
									className={classes.cardTitle}
									gutterBottom
								>
									$BUSD/$LUCHOW Balance:
								</Typography>
								<Typography
									className={classes.cardDesc}
									color="text.secondary"
								>
									0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography
									className={classes.cardTitle}
									gutterBottom
								>
									$BUSD/$LUCHOW Earnings:
								</Typography>
								<Typography
									className={classes.cardDesc}
									color="text.secondary"
								>
									0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography
									className={classes.cardTitle}
									gutterBottom
								>
									Total $BUSD/$LUCHOW Distributed:
								</Typography>
								<Typography
									className={classes.cardDesc}
									color="text.secondary"
								>
									0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Box my={10}>
					<Grid container justifyContent="center">
						<Grid item xs={12} lg={7}>
							<Card className={classes.cardRoot}>
								<CardContent>
									<Typography
										className={classes.cardTitle}
										gutterBottom
									>
										$BUSD/$LUCHOW not claimed:
									</Typography>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<Typography
											className={classes.cardDesc}
											color="text.secondary"
										>
											0
										</Typography>
									</Box>
								</CardContent>
								<CardActions>
									<Button fullWidth size="small">
										Claim Now
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Box>

				<Box my={10}>
					<Card className={classes.linkCard}>
						<CardContent>
							<Grid container justifyContent="center">
								<Grid item>
									<Link
										href="#"
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1,
										}}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Avatar
											src={LunachowImg}
											alt="lunachow"
										/>
										<span>
											Luchow Contract:
											0xe4e8e6878718bfe533702d4a6571eb74d79b0915
										</span>
									</Link>
									<Link
										href="#"
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1,
										}}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Avatar
											src={ChainhowImg}
											alt="lunachow"
										/>
										<span>
											BUSD Contract:
											0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56
										</span>
									</Link>
									<Link
										href="#"
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1,
										}}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Avatar src={MlokyImg} alt="lunachow" />
										<span>
											MLOKY Contract:
											0x11C97Fc75E1ecf0F7315c0f7c15cF94782795aE3
										</span>
									</Link>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Box>
			</Box>
		</Box>
	);
};

export default DashboardPage;
