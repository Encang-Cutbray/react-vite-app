import Webcam, { WebcamProps } from "react-webcam";
import { Box, Text } from "@chakra-ui/react";

import { useContext, useEffect, useRef } from "react";

import AppAnimate from "../components/AppAnimate";
import { AppFooter, AppHeader, AppLayout } from "../components/layouts";

import MenuContext, { AppMenuType } from "../state/menu-context";

function Cammera() {
	const { menus } = useContext<AppMenuType>(MenuContext);
	const webcamRef = useRef<Webcam>(null);

	useEffect(() => {
		console.log(webcamRef.current?.video);

		return () => {
			webcamRef;
		};
	}, [webcamRef]);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={16}>
					<Text textAlign="center">Camera</Text>
					<Box m={2}>
						<Webcam
							ref={webcamRef}
							videoConstraints={{ facingMode: "user" }}
							mirrored
						/>
					</Box>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default Cammera;
