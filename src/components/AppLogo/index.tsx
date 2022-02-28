import { Image } from "@chakra-ui/react";
import AppIcon from "../../theme/app-icon";

type AppLogoProps = {
	onClick?: VoidFunction;
	src?: string;
};
function AppLogo({ onClick, src }: AppLogoProps) {
	
	let srcLogo = src ? src : AppIcon.AppLogo;

	return (
		<Image
			onClick={onClick}
			w={6}
			h={6}
			src={srcLogo}
			alt="App Logo"
			cursor="pointer"
		/>
	);
}

export default AppLogo;
