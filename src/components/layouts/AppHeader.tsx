import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Icon, Avatar, AvatarBadge, Image } from "@chakra-ui/react";

import AppLogo from "../AppLogo";
import AppWrapper from "../AppWrapper";

import AppIcon from "../../theme/app-icon";

import MenuContext, { AppMenuType } from "../../state/menu-context";

function AppHeader() {
	let navigate = useNavigate();
	const { menus } = useContext<AppMenuType>(MenuContext);
	const { 0: berandaMenu, 1: notificationMenu } = menus.top;

	const onClickNav = (url: string) => {
		navigate(url);
	};

	return (
		<AppWrapper>
			<Box
				position="fixed"
				w="inherit"
				maxW="inherit"
				bg="white"
				zIndex={1}
			>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					borderBottom="1px"
					borderColor="gray.200"
					py={3}
					px={4}
				>
					<Box boxSize={6} />
					<Box flex={1}>
						<Box display="flex" justifyContent="center">
							<AppLogo
								onClick={() => onClickNav(berandaMenu.url)}
								src={AppIcon.AppLogo}
							/>
						</Box>
					</Box>
					<Box alignSelf="center">
						<Avatar
							cursor="pointer"
							onClick={() => onClickNav(notificationMenu.url)}
							boxSize={6}
							bg="transparent"
							icon={
								<Icon
									color="blue.500"
									as={AppIcon.MdNotifications}
									boxSize="inherit"
								/>
							}
						>
							<AvatarBadge
								boxSize="0.8em"
								top={-2}
								bg="red.500"
							/>
						</Avatar>
					</Box>
				</Box>
			</Box>
		</AppWrapper>
	);
}

export default AppHeader;
