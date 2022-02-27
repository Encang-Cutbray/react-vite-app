import { ReactNode } from "react";

import { ScaleFade } from "@chakra-ui/react";

type AppWrapperProps = {
	children?: ReactNode;
};

function AppAnimate({ children }: AppWrapperProps) {
	return (
		<ScaleFade initialScale={1.25} in={true}>
			{children}
		</ScaleFade>
	);
}

export default AppAnimate;
