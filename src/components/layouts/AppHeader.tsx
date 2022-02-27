import { Box, Icon, Avatar, AvatarBadge, Image } from "@chakra-ui/react";

import AppIcon from "../../theme/app-icon";

function AppHeader() {
	return (
		<Box position="fixed" width="100%" maxW="425px">
			<Box
				bg="white"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				borderBottom="1px"
				borderColor="gray.200"
				py={3}
				px={4}
			>
				<Image
					w={6}
					h={6}
					src={AppIcon.AppLogo}
					alt="App Logo"
					flex={1}
					cursor="pointer"
				/>

				<Box alignSelf="center">
					<Avatar
						cursor="pointer"
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
						<AvatarBadge boxSize="0.8em" top={-2} bg="red.500" />
					</Avatar>
				</Box>
			</Box>
		</Box>
	);
}

export default AppHeader;
