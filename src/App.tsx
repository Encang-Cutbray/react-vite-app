import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Text, Image, Button, Link } from "@chakra-ui/react";
import { AppFooter, AppHeader, AppLayout } from "./components/layouts";

import FooterMenuContext from "./state/menu-context";

function App() {
	let navigate = useNavigate();
	const footerMenu = useContext(FooterMenuContext);

	return (
		<AppLayout>
			<AppHeader />
			<Box h="1000px" bg="gray.100" pt={16}>
				<Text>Beranda</Text>
				{footerMenu.map((nav) => (
					<Link
						ml={2}
						key={nav.name}
						onClick={() => navigate(`account`)}
					>
						{nav.name}
					</Link>
				))}
				<Text mt="800px">KOPIU</Text>
			</Box>
			<AppFooter footerMenu={footerMenu} />
		</AppLayout>
	);
}

export default App;
