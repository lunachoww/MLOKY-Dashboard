import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Dashboard />
			</BrowserRouter>
		</React.Fragment>
	);
};

export default App;
