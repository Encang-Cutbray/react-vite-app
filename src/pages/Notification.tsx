import { Box, Text } from "@chakra-ui/react";
import AppAnimate from "../components/AppAnimate";

import {  AppHeaderSecondary, AppLayout } from "../components/layouts";

function Notification() {
	let pageTitle = 'Notification'
	return (
		<AppLayout>
			<AppHeaderSecondary title={pageTitle} />
			<AppAnimate>
				<Box h="1000px" bg="gray.100" pt={16}>
					<Text>Notification</Text>
				</Box>
			</AppAnimate>
		</AppLayout>
	);
}

export default Notification;
