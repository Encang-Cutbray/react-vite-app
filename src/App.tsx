import { useContext } from "react";

import { Box, Text, Button } from "@chakra-ui/react";

import AppAnimate from "./components/AppAnimate";
import { AppFooter, AppHeader, AppLayout } from "./components/layouts";

import { useAuth } from "./hooks";
import MenuContext, { AppMenuType } from "./state/menu-context";

function App() {
	const { menus } = useContext<AppMenuType>(MenuContext);
	let auth = useAuth();
	const checkCamera = () => {
		navigator.mediaDevices.getUserMedia({
			video: true,
			audio: false
		});
	}
	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={12}>
					<Text textAlign="center" mt={2}>
						{auth.user}
					</Text>
					<Button colorScheme="teal" size="sm" textAlign="center" onClick={checkCamera}>Camera</Button>
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
