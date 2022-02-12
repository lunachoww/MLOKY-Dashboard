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

const RewardsCalculatorPage = () => {
	const classes = useStyles();

	return (
		<Box>
			<Box my={4}>
				<Box sx={{ textAlign: "center", mb: 5 }}>
					<Typography variant="h4" color="white">
						Rewards Calculator
					</Typography>
				</Box>
				<Grid container justifyContent="center">
					<Grid item xs={12} lg={4}>
						<Card className={classes.calculateCard}>
							<CardContent>
								<Typography className={classes.calculateCardTitle} gutterBottom>
									MLOKY Token Owned
								</Typography>
								<Typography
									className={classes.calculateCardDesc}
									color="text.secondary"
								>
									0
								</Typography>
							</CardContent>
						</Card>

						<Card className={classes.calculateCard}>
							<CardContent>
								<Typography className={classes.calculateCardTitle} gutterBottom>
									Cost of Token ($)
								</Typography>
								<Typography
									className={classes.calculateCardDesc}
									color="text.secondary"
								>
									0
								</Typography>
							</CardContent>
						</Card>

						<Card className={classes.calculateCard}>
							<CardContent>
								<Typography className={classes.calculateCardTitle} gutterBottom>
									Daily Trade Volume ($)
								</Typography>
								<Typography
									className={classes.calculateCardDesc}
									color="text.secondary"
								>
									0
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>

			<Box my={4}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Daily ($)
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									0.00
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Weekly ($)
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									0.00
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Monthly ($)
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									0.00
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									Yearly ($)
								</Typography>
								<Typography className={classes.cardDesc} color="text.secondary">
									0.00
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<Box my={10}>
				<Grid container justifyContent="center">
					<Grid item xs={12} lg={7}>
						<Card className={classes.cardRoot}>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom>
									$BUSD/$LUCHOW not claimed:
								</Typography>
								<Box sx={{ justifyContent: "center" }}>
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
		</Box>
	);
};

export default RewardsCalculatorPage;
