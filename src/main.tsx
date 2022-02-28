import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import theme from "./theme";

import { MenuProvider } from "./state/menu-context";
import { AuthProvider } from "./state/auth-context";

import { Account, Interest, NotFound, Notification, Login } from "./pages";
import AuthWrapper from "./components/AuthWrapper";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={theme}>
			<MenuProvider>
				<AuthProvider>
					<BrowserRouter>
						<Routes>
							<Route element={<AuthWrapper />}>
								<Route path="/" element={<App />} />
								<Route path="account" element={<Account />} />
								<Route path="interest" element={<Interest />} />
								<Route
									path="notification"
									element={<Notification />}
								/>
							</Route>
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</AuthProvider>
			</MenuProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
