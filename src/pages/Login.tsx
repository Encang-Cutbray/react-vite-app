import {
	Box,
	useColorModeValue,
	Heading,
	Stack,
	FormControl,
	FormLabel,
	Input,
	Button,
} from "@chakra-ui/react";

import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";

import AppLogo from "../components/AppLogo";
import AppAnimate from "../components/AppAnimate";
import { AppHeaderSecondary, AppLayout } from "../components/layouts";

function Login() {
	let navigate = useNavigate();
	let auth = useAuth();

	let from = "/";
	const handleSignIn = () => {
		let username = "Guest";
		auth.signin(username, () => {
			navigate(from, { replace: true });
		});
	};

	return (
		<AppLayout>
			<AppHeaderSecondary title="Sign In" logo={<AppLogo />} />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={16} display="flex" pb={4}>
					<Box
						flex={1}
						mx={2}
						rounded="lg"
						bg={useColorModeValue("white", "gray.700")}
						boxShadow="md"
						p={2}
					>
						<Stack spacing={4}>
							<Heading textAlign="center" fontSize="md">
								Sign in to your account
							</Heading>
							<FormControl id="email">
								<FormLabel fontSize="sm">Email</FormLabel>
								<Input type="email" size="md" />
							</FormControl>
							<FormControl id="password">
								<FormLabel fontSize="sm">Password</FormLabel>
								<Input type="password" size="md" />
							</FormControl>
							

							<Button
								onClick={handleSignIn}
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
							>
								Sign in
							</Button>
						</Stack>
					</Box>
				</Box>
			</AppAnimate>
		</AppLayout>
	);
}

export default Login;
