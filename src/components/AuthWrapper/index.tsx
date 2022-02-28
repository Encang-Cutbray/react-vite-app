import { useEffect, useState } from "react";

import { User } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks";
import { authFirebase } from "../../libs/firebase-app";
import { Box } from "@chakra-ui/react";

function AuthWrapper() {
	let location = useLocation();

	const [userAuth, loadingAuth, errorAuth] = useAuthState(authFirebase);
	useEffect(() => {
		return () => {
			userAuth;
		};
	}, [userAuth]);

	if (loadingAuth) {
		return <Box>Loading</Box>;
	}
	if (!userAuth || errorAuth) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (userAuth && !loadingAuth) {
		console.log(userAuth);
	}
	return <Outlet />;
}

export default AuthWrapper;
