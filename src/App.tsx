import { AppFooter, AppHeader, AppLayout } from "./components/layouts";
import { Box, Text, Image } from "@chakra-ui/react";
import Logo from "./styles/favicon.svg";

import footerJson from "./data/footer.json";

function App() {
	return (
		<AppLayout>
			<AppHeader />
			<Box h="1000px" bg="gray.100" pt={16}>
				Hello
				<Image w="25px" h="25px" src={Logo} alt="App Logo" />
				<Text mt="800px">KOPIU</Text>
			</Box>
			<AppFooter footerMenu={footerJson.data} />
		</AppLayout>
	);
}

export default App;
