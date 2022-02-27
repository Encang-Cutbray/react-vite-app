import { Box, Text } from "@chakra-ui/react";

import {  AppHeaderSecondary, AppLayout } from "../components/layouts";

function Notification() {
	let pageTitle = 'Notification'
	return (
		<AppLayout>
			<AppHeaderSecondary title={pageTitle} />
			<Box h="1000px" bg="gray.100" pt={16}>
				<Text>Notification</Text>
			</Box>
		</AppLayout>
	);
}

export default Notification;
