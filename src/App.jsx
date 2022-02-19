import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { moralis } from "./utils/const";

import { MoralisProvider } from "react-moralis";

const theme = createTheme({
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(","),
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<MoralisProvider
				appId={moralis.TEST_APP_ID}
				serverUrl={moralis.TEST_SERVER_URL}
			>
				<BrowserRouter>
					<Dashboard />
				</BrowserRouter>
			</MoralisProvider>
		</ThemeProvider>
	);
};

export default App;
