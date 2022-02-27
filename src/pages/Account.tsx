import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { AppFooter, AppHeader, AppLayout } from "../components/layouts";
import FooterMenuContext from "../state/menu-context";

function Account() {
	const footerMenu = useContext(FooterMenuContext);

	return (
		<AppLayout>
			<AppHeader />
			<Box h="1000px" bg="gray.100" pt={16}>
				<Text>Account</Text>
			</Box>
			<AppFooter footerMenu={footerMenu} />
		</AppLayout>
	);
}

export default Account;
