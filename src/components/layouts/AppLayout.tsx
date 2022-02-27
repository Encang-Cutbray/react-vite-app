import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

type AppLayoutProps = {
	children?: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
	return (
		<Box
			bg="gray.200"
			maxW="full"
			minH="100vh"
			display="flex"
			justifyContent="center"
		>
			<Box bg="white" width="100%" maxW="425px">
				{children}
			</Box>
		</Box>
	);
}

export default AppLayout;
