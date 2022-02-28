import { ReactNode } from "react";

import { Fade, ScaleFade, Box } from "@chakra-ui/react";

type AppWrapperProps = {
	children?: ReactNode;
};

function AppAnimate({ children }: AppWrapperProps) {
	return (
		<>
			{/* <Fade in={true}>{children}</Fade> */}
			{/* <ScaleFade initialScale={-4} in={true} >
				{children}
			</ScaleFade> */}
			<Box>{children}</Box>
		</>
	);
}

export default AppAnimate;
