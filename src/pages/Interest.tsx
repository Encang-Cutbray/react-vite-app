import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";

import AppAnimate from "../components/AppAnimate";
import { AppFooter, AppHeader, AppLayout } from "../components/layouts";

import MenuContext, { AppMenuType } from "../state/menu-context";

function Interest() {
	const { menus } = useContext<AppMenuType>(MenuContext);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={16}>
					<Text textAlign="center">Interest</Text>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default Interest;
