import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import AppAnimate from "../components/AppAnimate";

import { AppFooter, AppHeader, AppLayout } from "../components/layouts";
import MenuContext, { AppMenuType } from "../state/menu-context";

function Login() {
	const { menus } = useContext<AppMenuType>(MenuContext);
	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box h="1000px" bg="gray.100" pt={16}>
					<Text>Login</Text>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default Login;
