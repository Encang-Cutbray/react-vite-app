import { useContext } from "react";

import { Box, Text } from "@chakra-ui/react";
import { AppFooter, AppHeader, AppLayout } from "./components/layouts";
import menuContext from "./state/menu-context";
import AppAnimate from "./components/AppAnimate";


function App() {
	const footerMenu = useContext(menuContext);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box h="1000px" bg="gray.100" pt={16}>
					<Text>Beranda</Text>
					<Text mt="800px">End Beranda</Text>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={footerMenu} />
		</AppLayout>
	);
}

export default App;
