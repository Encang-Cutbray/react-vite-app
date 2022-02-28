import {
	Box,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Text,
	Flex,
	Spacer,
	Link,
} from "@chakra-ui/react";
import { useContext } from "react";
import AppAnimate from "../components/AppAnimate";

import { AppFooter, AppHeader, AppLayout } from "../components/layouts";
import { authFirebase } from "../libs/firebase-app";
import MenuContext, { AppMenuType } from "../state/menu-context";

function Account() {
	const { menus } = useContext<AppMenuType>(MenuContext);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={14}>
					{new Array(1).fill(1).map((_, index) => (
						<Box
							bg="white"
							mx={2}
							p={2}
							rounded="md"
							shadow="sm"
							mt={3}
							key={index}
						>
							<Stat>
								<StatLabel textAlign="center">
									Account
								</StatLabel>
								<StatLabel>Collected Fees</StatLabel>
								<Flex>
									<StatNumber fontSize="md">£0.00</StatNumber>
									<Spacer />
									<StatHelpText color="blue.500">
										Feb 12 - Feb 28
									</StatHelpText>
								</Flex>
								<Flex>
									<Spacer />
									<Link
										fontSize="sm"
										color="red.500"
										onClick={async() => await authFirebase.signOut()}
									>
										Logout
									</Link>
								</Flex>
							</Stat>
						</Box>
					))}
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default Account;
