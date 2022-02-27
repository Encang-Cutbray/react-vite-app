
import { Box, Text } from "@chakra-ui/react";

import { AppHeaderSecondary, AppLayout } from "../components/layouts";

function NotFound() {
	let pageTitle = "Not Found";
	return (
		<AppLayout>
			<AppHeaderSecondary title={pageTitle} />
			<Box pt={16}>
				<Text textAlign="center" fontSize="lg" textTransform="capitalize">Page {pageTitle}</Text>
			</Box>
		</AppLayout>
	);
}

export default NotFound;
