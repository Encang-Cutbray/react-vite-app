import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Icon, Avatar, Text, Image } from "@chakra-ui/react";

import AppWrapper from "../AppWrapper";

import AppIcon from "../../theme/app-icon";

import MenuContext, { AppMenuType } from "../../state/menu-context";

type AppHeaderSecondaryProps = {
	title?: string;
	logo?: ReactNode;
};

function AppHeaderSecondary({ title, logo }: AppHeaderSecondaryProps) {
	const { menus } = useContext<AppMenuType>(MenuContext);
	const { 0: berandaMenu, ...rest } = menus.top;

	let navigate = useNavigate();

	const onClickNav = (url: string) => {
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
						{logo ? (
							logo
						) : (
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
						)}
					</Box>
					<Box flex={1}>
						<Text
							textAlign="center"
							textTransform="capitalize"
							letterSpacing={2}
							fontSize="md"
						>
							{title ?? "Title"}
						</Text>
					</Box>
				</Box>
			</Box>
		</AppWrapper>
	);
}

export default AppHeaderSecondary;
