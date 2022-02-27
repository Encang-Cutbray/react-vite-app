import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

type AppWrapperProps = {
	children?: ReactNode;
};

function AppWrapper({ children }: AppWrapperProps) {
	return (
		<Box width="100%" maxW="425px">
			{children}
		</Box>
	);
}

export default AppWrapper;
