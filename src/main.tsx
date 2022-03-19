import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Firebase init
import "./libs/firebase-app";

import App from "./App";
import theme from "./theme";

import { MenuProvider } from "./state/menu-context";
import { AuthProvider } from "./state/auth-context";

import AuthWrapper from "./components/AuthWrapper";
import {
	Account,
	Interest,
	NotFound,
	Notification,
	Login,
	Registration,
} from "./pages";
import GuestWrapper from "./components/GuestWrapper";
import Cammera from "./pages/Cammera";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={theme}>
			<MenuProvider>
				<AuthProvider>
					<BrowserRouter>
						<AuthProvider>
							<Routes>
								<Route element={<AuthWrapper />}>
									<Route path="/" element={<App />} />
									<Route
										path="account"
										element={<Account />}
									/>
									<Route
										path="interest"
										element={<Interest />}
									/>
									<Route
										path="notification"
										element={<Notification />}
									/>
									<Route
										path="/camera"
										element={<Cammera />}
									/>
								</Route>
								<Route element={<GuestWrapper />}>
									<Route path="/login" element={<Login />} />
									<Route
										path="/registration"
										element={<Registration />}
									/>
								</Route>
								<Route path="*" element={<NotFound />} />
							</Routes>
						</AuthProvider>
					</BrowserRouter>
				</AuthProvider>
			</MenuProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
