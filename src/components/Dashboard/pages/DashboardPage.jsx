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
	const [mlokyBalance, setMlokyBalance] = useState(0);
	const [busdBalance, setBusdBalance] = useState(0);
	const [luchowBalance, setLuchowBalance] = useState(0);
	const [totalShares, setTotalShares] = useState(0);
	const [totalDistributed, setTotalDistributed] = useState(0);
	const [unpaidEarnings, setUnpaidEarnings] = useState(0);

	Moralis.start({
		appId: moralis.TEST_APP_ID,
		serverUrl: moralis.TEST_SERVER_URL,
	});

	const getValues = async (userEthAddress) => {
		const web3 = new Web3(window.ethereum);
		await Moralis.enableWeb3();

		const contract = new web3.eth.Contract(
			moralis.ABI_CONTRACT,
			moralis.CONTRACT_ADDRESS
		);

		await contract.methods.totalDistributed().call(async (err, result) => {
			if (result) setTotalDistributed(result);
			else console.log(err);
		});

		await contract.methods.totalShares().call(async (err, result) => {
			if (result) setTotalShares(result);
			else console.log(err);
		});

		await contract.methods
			.getUnpaidEarnings(userEthAddress)
			.call(async (err, result) => {
				if (result) setUnpaidEarnings(result);
				else {
					console.log(err);
					setUnpaidEarnings(0);
				}
			});

		const contractLuchow = new web3.eth.Contract(
			moralis.IBEP_20_ABI,
			moralis.LUCHOW_CONTRACT
		);

		await contractLuchow.methods
			.balanceOf(userEthAddress)
			.call(async (err, result) => {
				if (result) setLuchowBalance(result);
				else {
					console.log(err);
					setLuchowBalance(0);
				}
			});

		const contractMloky = new web3.eth.Contract(
			moralis.IBEP_20_ABI,
			moralis.MLOKY_CONTRACT
		);

		await contractMloky.methods
			.balanceOf(userEthAddress)
			.call(async (err, result) => {
				if (result) setMlokyBalance(result);
				else {
					console.log(err);
					setMlokyBalance(0);
				}
			});

		const contractBusd = new web3.eth.Contract(
			moralis.IBEP_20_ABI,
			moralis.BUSD_CONTRACT
		);

		await contractBusd.methods
			.balanceOf(userEthAddress)
			.call(async (err, result) => {
				if (result) setBusdBalance(result);
				else {
					console.log(err);
					setBusdBalance(0);
				}
			});
	};

	const claimDividend = async (userEthAddress) => {
		const web3 = new Web3(window.ethereum);
		await Moralis.enableWeb3();

		const contract = new web3.eth.Contract(
			moralis.ABI_CONTRACT,
			moralis.CONTRACT_ADDRESS
		);

		contract.methods
			.claimDividend()
			.send({ from: userEthAddress })
			.then(function (resp) {
				console.log(resp);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const { user } = useMoralis();
	const Web3API = useMoralisWeb3Api();
	const { data, error, fetch } = useWeb3ExecuteFunction();

	useEffect(() => {
		if (user) setEthAddress(user.get("ethAddress"));
		else setEthAddress("");
	}, [user]);

	useEffect(() => {
		if (ethAddress) getValues(ethAddress);
	}, [ethAddress]);

	return (
		<Box>
			<Box mt={5}>
				<TextField
					className={classes.textField}
					fullWidth
					id="outlined-basic"
					placeholder="Wallet Address"
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
								<Typography className={classes.cardTitle} gutterBottom>
									$MLOKY Balance:
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									{mlokyBalance}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									$BUSD/$LUCHOW Balance:
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									$BUSD: {busdBalance}
									<br />
									$LUCHOW: {luchowBalance}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									$BUSD/$LUCHOW Earnings:
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									{totalShares}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Total $BUSD/$LUCHOW Distributed:
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									{totalDistributed}
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
									<Typography className={classes.cardTitle} gutterBottom>
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
											{unpaidEarnings}
										</Typography>
									</Box>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										size="small"
										onClick={() => claimDividend(ethAddress)}
										disabled={!Number(unpaidEarnings) || !user}
									>
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
										<Avatar src={LunachowImg} alt="lunachow" />
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
										<Avatar src={ChainhowImg} alt="lunachow" />
										<span>
											BUSD Contract: 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56
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
											MLOKY Contract: 0x11C97Fc75E1ecf0F7315c0f7c15cF94782795aE3
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
