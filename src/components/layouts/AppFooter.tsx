import { Box, Icon, Text } from "@chakra-ui/react";
import AppIcon from "../../theme/app-icon";

type AppFooterProps = {
	footerMenu: {
		name: string;
		icon: string;
	}[];
};

function AppFooter({ footerMenu }: AppFooterProps) {
	return (
		<Box position="fixed" width="100%" maxW="425px" bottom="0">
			<Box
				display="flex"
				justifyContent="space-around"
				bg="white"
				borderTop="1px"
				borderColor="gray.200"
				py={2}
			>
				{footerMenu.map(({ name, icon }, index) => (
					<Box
						key={name}
						display="flex"
						flexDir="column-reverse"
						alignItems="center"
						cursor="pointer"
					>
						<Text
							fontSize="xs"
							textTransform="capitalize"
							color="blue.500"
						>
							{name}
						</Text>
						<Icon
							color="blue.500"
							as={AppIcon[icon] as any}
							w={6}
							h={6}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default AppFooter;
