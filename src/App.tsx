import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { Box, Text } from "@chakra-ui/react";

import AppAnimate from "./components/AppAnimate";
import { AppFooter, AppHeader, AppLayout } from "./components/layouts";

import MenuContext, { AppMenuType } from "./state/menu-context";
import AuthWrapper from "./components/AuthWrapper";

function App() {
	const { menus } = useContext<AppMenuType>(MenuContext);

	let location = useLocation();

	console.log(import.meta.env);
	console.log(location);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box h="1000px" bg="gray.100" pt={16}>
					<Text>Beranda</Text>
					<Text mt="800px">End Beranda</Text>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default App;
