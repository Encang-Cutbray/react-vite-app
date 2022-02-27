import { Box, Text } from "@chakra-ui/react";
import AppAnimate from "../components/AppAnimate";

import { AppHeaderSecondary, AppLayout } from "../components/layouts";

function NotFound() {
	let pageTitle = "Not Found";
	return (
		<AppLayout>
			<AppHeaderSecondary title={pageTitle} />
			<AppAnimate>
				<Box pt={16}>
					<Text
						textAlign="center"
						fontSize="lg"
						textTransform="capitalize"
					>
						Page {pageTitle}
					</Text>
				</Box>
			</AppAnimate>
		</AppLayout>
	);
}

export default NotFound;
