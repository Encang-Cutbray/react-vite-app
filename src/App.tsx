import { useContext } from "react";

import { Box, Text } from "@chakra-ui/react";

import AppAnimate from "./components/AppAnimate";
import { AppFooter, AppHeader, AppLayout } from "./components/layouts";

import MenuContext, { AppMenuType } from "./state/menu-context";
import { useAuth } from "./hooks";

function App() {
	const { menus } = useContext<AppMenuType>(MenuContext);
	let auth = useAuth();

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={16}>
					<Text textAlign="center" mt={2}>
						{auth.user}
					</Text>
					<Text textAlign="center" mt={28}>
						Beranda
					</Text>
					<Text textAlign="center" mt={28}>
						Beranda
					</Text>
					<Text textAlign="center" mt={28}>
						Beranda
					</Text>
					<Text textAlign="center" mt={28}>
						Beranda
					</Text>
					<Text textAlign="center" mt={28}>
						Beranda
					</Text>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default App;
