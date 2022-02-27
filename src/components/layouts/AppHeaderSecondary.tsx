import AppWrapper from "../AppWrapper";

import AppIcon from "../../theme/app-icon";

import { useNavigate } from "react-router-dom";

import { navTop } from "../../state/menu-context";

import { Box, Icon, Avatar, Text } from "@chakra-ui/react";

type AppHeaderSecondaryProps = {
	title?: string;
};

function AppHeaderSecondary({ title }: AppHeaderSecondaryProps) {
	const { 0: berandaMenu } = navTop;

	let navigate = useNavigate();

	const onClickNav = (url: string) => {
		// navigate("-1", { replace: true });
		navigate(url, { replace: true });
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
					<Box alignSelf="center">
						<Avatar
							cursor="pointer"
							onClick={() => onClickNav(berandaMenu.url)}
							w={6}
							h={6}
							bg="transparent"
							icon={
								<Icon
									color="black"
									as={AppIcon.MdArrowBack}
									w="inherit"
									h="inherit"
								/>
							}
						></Avatar>
					</Box>
					<Box flex={1}>
						<Text textAlign="center" textTransform="capitalize" letterSpacing={2} fontSize="md">{title ?? "Title"}</Text>
					</Box>
				</Box>
			</Box>
		</AppWrapper>
	);
}

export default AppHeaderSecondary;
