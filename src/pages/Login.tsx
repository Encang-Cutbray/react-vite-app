import { Box, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import AppLogo from "../components/AppLogo";
import AppAnimate from "../components/AppAnimate";
import { AppHeaderSecondary, AppLayout } from "../components/layouts";

import { useAuth } from "../hooks";

function Login() {
	let navigate = useNavigate();
	let location = useLocation();
	let auth = useAuth();

	// let from: any = location.state?.from?.pathname || "/";	
	let from = "/";
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		let formData = new FormData(event.currentTarget);
		let username = formData.get("username") as string;

		auth.signin(username, () => {
			navigate(from, { replace: true });
		});
	}

	return (
		<AppLayout>
			<AppHeaderSecondary title="Login" logo={<AppLogo />} />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={16}>
					<Text textAlign="center">
						You must log in to view the page at {from}
					</Text>
					<form onSubmit={handleSubmit}>
						<label>
							Username: <input name="username" type="text" />
						</label>{" "}
						<button type="submit">Login</button>
					</form>
				</Box>
			</AppAnimate>
		</AppLayout>
	);
}

export default Login;
