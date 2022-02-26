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
const DashboardPage = () => {
	const classes = useStyles();

	const [ethAddress, setEthAddress] = useState("");
	const [mlokyBalance, setMlokyBalance] = useState(0);
	const [busdBalance, setBusdBalance] = useState(0);
	const [luchowBalance, setLuchowBalance] = useState(0);
	const [totalShares, setTotalShares] = useState(0);
	const [totalDistributed, setTotalDistributed] = useState(0);
	const [unpaidEarnings, setUnpaidEarnings] = useState(0);

	return (
		<Box>
			<Box mt={-3}>
				<Grid container justifyContent="center">
					<Grid item xs={12} lg={4}>
						<Button fullWidth size="small" className={classes.migrateBtn}>
							Migrate MLOKY
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Box mt={3}>
				<TextField
					className={classes.textField}
					fullWidth
					id="outlined-basic"
					label="Wallet Address"
					variant="filled"
					// value={ethAddress}
					onChange={(e) => setEthAddress(e.target.value)}
				/>
			</Box>

			<Box my={3}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Your MLOKY Balance:
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Your BUSD/LUCHOW Balance:
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									$BUSD: 0
									<br />
									$LUCHOW: 0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Your Total Earnings (USD):
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									$BUSD: 0
									<br />
									$LUCHOW: 13
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Total Distributed (USD):
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									$BUSD: 0
									<br />
									$LUCHOW: 0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Box mt={5} mb={3}>
					<Grid container justifyContent="center">
						<Grid item xs={12} lg={7}>
							<Card className={classes.cardRoot}>
								<CardContent>
									<Typography className={classes.cardTitle} gutterBottom>
										$BUSD/$LUCHOW not claimed (USD):
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
											$BUSD: 0
											<br />
											$LUCHOW: 0
										</Typography>
									</Box>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										size="small"
										// onClick={() => claimDividend(ethAddress)}
										// disabled={!Number(unpaidEarnings) || !user}
									>
										Claim Now
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Box>

				{/*  under claim - vol & price*/}
				<Box>
					<Grid container justifyContent="center">
						<Grid item xs={12} lg={7}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<Card className={classes.miniCard}>
										<CardContent>
											<Typography
												className={classes.miniCardTitle}
												gutterBottom
											>
												MLOKY Market Vol (USD):
											</Typography>
											<Box>
												<Typography
													className={classes.miniCardDesc}
													color="text.secondary"
												>
													205000
												</Typography>
											</Box>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Card className={classes.miniCard}>
										<CardContent>
											<Typography
												className={classes.miniCardTitle}
												gutterBottom
											>
												MLOKY Current Price (USD):
											</Typography>
											<Box>
												<Typography
													className={classes.miniCardDesc}
													color="text.secondary"
												>
													0
												</Typography>
											</Box>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>

				<Box mt={5} mb={10}>
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
