import {
	Box,
	Heading,
	Stack,
	FormControl,
	FormLabel,
	Input,
	Button,
	Link,
	Flex,
	Spacer,
} from "@chakra-ui/react";

import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Firebase
import { authFirebase } from "../../libs/firebase-app";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import AppLogo from "../../components/AppLogo";
import AppAnimate from "../../components/AppAnimate";
import AppLoading from "../../components/AppLoading";
import { AppHeaderSecondary, AppLayout } from "../../components/layouts";

function Login() {
	let { state }: any = useLocation();
	const title = "Login";
	const from = state?.from ?? "/";
	const navigate = useNavigate();
	const [email, setEmail] = useState("user@mail.com");
	const [password, setPassword] = useState("secret");

	const [
		signInWithEmailAndPassword,
		userSign,
		loadingSign,
		errorSign,
	] = useSignInWithEmailAndPassword(authFirebase);

	if (userSign) {
		navigate(from, { replace: true });
	}

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name == "email") {
			setEmail(e.target.value);
		}
		if (e.target.name == "password") {
			setPassword(e.target.value);
		}
	};
	const handleSignIn = async () => {
		await signInWithEmailAndPassword(email, password);
	};
	if (loadingSign) {
		return <AppLoading />;
	}
	return (
		<AppLayout>
			<AppHeaderSecondary title={title} logo={<AppLogo />} />
			<AppAnimate>
				<Box
					minH="100vh"
					h="full"
					bg="gray.100"
					pt={16}
					display="flex"
					pb={4}
				>
					<Box
						flex={1}
						mx={2}
						rounded="lg"
						bg="white"
						boxShadow="md"
						p={2}
					>
						<Stack spacing={4}>
							<Heading textAlign="center" fontSize="md">
								{title} to your account
							</Heading>
							<FormControl id="email">
								<FormLabel fontSize="sm">Email</FormLabel>
								<Input
									type="email"
									size="md"
									name="email"
									value={email}
									onChange={handleChangeInput}
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel fontSize="sm">Password</FormLabel>
								<Input
									type="password"
									size="md"
									value={password}
									name="password"
									onChange={handleChangeInput}
								/>
							</FormControl>

							<Button
								isLoading={loadingSign}
								onClick={handleSignIn}
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
							>
								{title}
							</Button>

							<Flex>
								<Spacer />
								<Link
									fontSize="sm"
									textAlign="right"
									onClick={() =>
										navigate("/registration", {
											state: { from: "registration" },
										})
									}
								>
									Registration
								</Link>
							</Flex>
						</Stack>
					</Box>
				</Box>
			</AppAnimate>
		</AppLayout>
	);
}

export default Login;
