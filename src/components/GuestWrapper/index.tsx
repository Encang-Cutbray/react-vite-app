
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import AppLoading from "../AppLoading";
import { authFirebase } from "../../libs/firebase-app";

function GuestWrapper() {
	const [userAuth, loadingAuth, errorAuth] = useAuthState(authFirebase);
	
	if (loadingAuth) {
		return <AppLoading />;
	}
	if (userAuth) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
}

export default GuestWrapper;
