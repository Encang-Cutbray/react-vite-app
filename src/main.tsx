import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import theme from "./theme";
import "@fontsource/poppins";

import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
