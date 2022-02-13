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
import React from "react";
import { useStyles } from "../styled";
import LunachowImg from "../../../assets/images/lunachow.png";
import MlokyImg from "../../../assets/images/mloky.png";
import ChainhowImg from "../../../assets/images/chain.png";

const DashboardPage = () => {
	const classes = useStyles();

	return (
		<Box>
			<Box mt={5}>
				<TextField
					className={classes.textField}
					fullWidth
					id="outlined-basic"
					label="Wallet Address"
					variant="outlined"
				/>
			</Box>

			<Box my={4}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									$MLOKY Holdings:
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
									$BUSD/$LUCHOW Holdings:
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
									$BUSD/$LUCHOW Earnings:
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
									Total $BUSD/$LUCHOW Distributed:
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
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
									<Typography className={classes.cardTitle} gutterBottom>
										$BUSD/$LUCHOW not claimed:
									</Typography>
									<Box sx={{ display: "flex", justifyContent: "center" }}>
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
