import AppWrapper from "../AppWrapper";

import AppIcon from "../../theme/app-icon";

import { useNavigate } from "react-router-dom";

import { Box, Icon, Text } from "@chakra-ui/react";

type AppFooterProps = {
	footerMenu: {
		name: string;
		icon: string;
		url: string;
	}[];
};

function AppFooter({ footerMenu }: AppFooterProps) {
	let navigate = useNavigate();

	const onClickNav = (url: string) => {
		navigate(url, { replace: true });
	};

	return (
		<AppWrapper>
			<Box position="fixed" width="inherit" maxW="inherit" bottom="0">
				<Box
					display="flex"
					justifyContent="space-around"
					bg="white"
					borderTop="1px"
					borderColor="gray.200"
					py={2}
				>
					{footerMenu.map(({ name, icon, url }) => (
						<Box
							onClick={() => onClickNav(url)}
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
		</AppWrapper>
	);
}

export default AppFooter;
