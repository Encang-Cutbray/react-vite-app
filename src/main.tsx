import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import theme from "./theme";
import { Account, Interest, NotFound, Notification } from "./pages";

import MenuContext, { navFooter } from "./state/menu-context";


ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={theme}>
			<MenuContext.Provider value={navFooter}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="account" element={<Account />} />
						<Route path="interest" element={<Interest />} />
						<Route path="notification" element={<Notification />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</MenuContext.Provider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
