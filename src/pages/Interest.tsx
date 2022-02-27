import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { AppFooter, AppHeader, AppLayout } from "../components/layouts";
import FooterMenuContext from "../state/menu-context";

function Interest() {
	const footerMenu = useContext(FooterMenuContext);

	return (
		<AppLayout>
			<AppHeader />
			<Box h="1000px" bg="gray.100" pt={16}>
				<Text>Interest</Text>
			</Box>
			<AppFooter footerMenu={footerMenu} />
		</AppLayout>
	);
}

export default Interest;
