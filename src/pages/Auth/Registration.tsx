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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import AppLogo from "../../components/AppLogo";
import AppAnimate from "../../components/AppAnimate";
import AppLoading from "../../components/AppLoading";
import { AppHeaderSecondary, AppLayout } from "../../components/layouts";

function Login() {
	let { state }: any = useLocation();
	const title = "Registration";
	const from = state?.from ?? "/";
	const navigate = useNavigate();
	const [email, setEmail] = useState("user@mail.com");
	const [password, setPassword] = useState("secret");

	const [
		createUserWithEmailAndPassword,
		userSign,
		loadingSign,
		errorSign,
	] = useCreateUserWithEmailAndPassword(authFirebase);

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
		await createUserWithEmailAndPassword(email, password);
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
								{title} your account
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
								bg={"pink.400"}
								color={"white"}
								_hover={{
									bg: "pink.500",
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
										navigate("/login", {
											state: { from: "registration" },
										})
									}
								>
									Login
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
