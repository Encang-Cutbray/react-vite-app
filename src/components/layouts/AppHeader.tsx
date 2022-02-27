import AppWrapper from "../AppWrapper";

import AppIcon from "../../theme/app-icon";

import { useNavigate } from "react-router-dom";

import { navTop } from "../../state/menu-context";

import { Box, Icon, Avatar, AvatarBadge, Image } from "@chakra-ui/react";

function AppHeader() {
	const { 0: berandaMenu, 1: notificationMenu } = navTop;

	let navigate = useNavigate();

	const onClickNav = (url: string) => {
		navigate(url);
	};

	return (
		<AppWrapper>
			<Box position="fixed" w="inherit" maxW="inherit" bg="white">
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					borderBottom="1px"
					borderColor="gray.200"
					py={3}
					px={4}
				>
					<Box flex={1}>
						<Box display="flex" justifyContent="center">
							<Image
								onClick={() => onClickNav(berandaMenu.url)}
								w={6}
								h={6}
								src={AppIcon.AppLogo}
								alt="App Logo"
								cursor="pointer"
							/>
						</Box>
					</Box>
					<Box alignSelf="center">
						<Avatar
							cursor="pointer"
							onClick={() => onClickNav(notificationMenu.url)}
							w={6}
							h={6}
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
