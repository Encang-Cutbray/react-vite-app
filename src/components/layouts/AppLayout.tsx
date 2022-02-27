import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";
import AppWrapper from "../AppWrapper";

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
			<AppWrapper>{children}</AppWrapper>
		</Box>
	);
}

export default AppLayout;
