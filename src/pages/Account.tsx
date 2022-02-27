import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import AppAnimate from "../components/AppAnimate";

import { AppFooter, AppHeader, AppLayout } from "../components/layouts";
import FooterMenuContext from "../state/menu-context";

function Account() {
	const footerMenu = useContext(FooterMenuContext);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box h="1000px" bg="gray.100" pt={16}>
					<Text>Account</Text>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={footerMenu} />
		</AppLayout>
	);
}

export default Account;
