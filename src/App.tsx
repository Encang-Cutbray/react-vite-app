import { useContext } from "react";

import { Box, Text } from "@chakra-ui/react";

import AppAnimate from "./components/AppAnimate";
import { AppFooter, AppHeader, AppLayout } from "./components/layouts";

import MenuContext, { AppMenuType } from "./state/menu-context";

function App() {
	const { menus } = useContext<AppMenuType>(MenuContext);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={16}>
					<Text textAlign="center">Beranda</Text>
					<Text mt="500px" textAlign="center">
						End Beranda
					</Text>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default App;
