import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(","),
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Dashboard />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
