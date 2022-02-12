import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardPage from "./pages/DashboardPage";
import { Avatar, Button } from "@mui/material";
import { useStyles } from "./styled";
import RewardsCalculatorPage from "./pages/RewardsCalculatorPage";
import LunachowLogo from "../../assets/images/lunachow.svg";
import TagIcon from "@mui/icons-material/Tag";
import LanguageIcon from "@mui/icons-material/Language";
import DashboardIcon from "../../assets/images/menu-icon/dashboard.svg";
import HashTagIcon from "../../assets/images/menu-icon/hashtag.svg";
import BrowserIcon from "../../assets/images/menu-icon/browser.svg";
import SwapIcon from "../../assets/images/menu-icon/swap.svg";
import CalculatorIcon from "../../assets/images/menu-icon/calculator.svg";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

// side mene width
const drawerWidth = 280;

// styled components
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 3),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	// justifyContent: "flex-end",
	justifyContent: "space-between",
}));

const Dashboard = (props) => {
	const classes = useStyles();

	const theme = useTheme();
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} className={classes.AppBarRoot}>
				<Toolbar className={classes.Toolbar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
						{/* <ChevronRightIcon /> */}
					</IconButton>

					<Box>
						<Button className={classes.connectBtn}>Connect</Button>
					</Box>
				</Toolbar>
			</AppBar>

			{/* appBar bottom for bottom */}
			<AppBar
				position="fixed"
				open={open}
				className={classes.AppBarRoot}
				sx={{ top: "auto", bottom: 0 }}
			>
				<Toolbar className={classes.Toolbar}>
					<Typography className={classes.copyright}>
						Copyright LunaChow {new Date().getFullYear()}
					</Typography>
				</Toolbar>
			</AppBar>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				className={classes.drawerRoot}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: 1,
						}}
					>
						<Avatar
							className={classes.logoAvatar}
							src={LunachowLogo}
							alt="logo"
						/>
						<Typography className={classes.logoText}>LUNACHOW </Typography>
					</Box>
					<IconButton onClick={handleDrawerClose}>
						<MenuIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />

				<Box px={2} mt={3} component="div" className={classes.menuIntro}>
					Core
				</Box>

				<List>
					<Link to="dashboard">
						<ListItem button>
							<ListItemIcon>
								<Avatar
									className={classes.menuIcon}
									src={DashboardIcon}
									alt="dashboard"
								/>
							</ListItemIcon>
							<ListItemText className={classes.menuText}>
								Dashboard
							</ListItemText>
						</ListItem>
					</Link>
				</List>

				<Box px={2} mt={3} component="div" className={classes.menuIntro}>
					OTHER LINKS
				</Box>
				<List>
					<ListItem button>
						<ListItemIcon>
							<Avatar
								className={classes.menuIcon}
								src={HashTagIcon}
								alt="dashboard"
							/>
						</ListItemIcon>
						<ListItemText className={classes.menuText}>Socials</ListItemText>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<Avatar
								className={classes.menuIcon}
								src={BrowserIcon}
								alt="dashboard"
							/>
						</ListItemIcon>
						<ListItemText className={classes.menuText}>Website</ListItemText>
					</ListItem>
				</List>

				<Box px={2} mt={3} component="div" className={classes.menuIntro}>
					ADDONs
				</Box>
				<List>
					<ListItem button>
						<ListItemIcon>
							<Avatar
								className={classes.menuIcon}
								src={SwapIcon}
								alt="dashboard"
							/>
						</ListItemIcon>
						<ListItemText className={classes.menuText}>LuchowSwap</ListItemText>
					</ListItem>
					<Link to="rewards-calculator">
						<ListItem button sx={{ mt: 1 }}>
							<ListItemIcon>
								<Avatar
									className={classes.calculatorIcon}
									src={CalculatorIcon}
									alt="dashboard"
								/>
							</ListItemIcon>

							<ListItemText className={classes.menuText}>
								Rewards Calculator
							</ListItemText>
						</ListItem>
					</Link>
				</List>
			</Drawer>

			{/* main content */}
			<Main open={open}>
				<DrawerHeader />
				<Routes>
					<Route index element={<DashboardPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
					<Route
						path="rewards-calculator"
						element={<RewardsCalculatorPage />}
					/>
				</Routes>
			</Main>
		</Box>
	);
};

export default Dashboard;
