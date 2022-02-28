import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import AppLoading from "../AppLoading";
import { authFirebase } from "../../libs/firebase-app";

function AuthWrapper() {
	let location = useLocation();

	const [userAuth, loadingAuth, errorAuth] = useAuthState(authFirebase);
	useEffect(() => {
		return () => {
			userAuth;
		};
	}, [userAuth]);

	if (loadingAuth) {
		return <AppLoading/>;
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
