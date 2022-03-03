
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import AppLoading from "../AppLoading";
import { authFirebase } from "../../libs/firebase-app";
import { useAuth } from "../../hooks";
import { User } from "firebase/auth";

function AuthWrapper() {
	let location = useLocation();
	let auth = useAuth();

	const [userAuth, loadingAuth, errorAuth] = useAuthState(authFirebase, {onUserChanged: async (user : User | null) => {
		console.log(user?.uid);
		
	}});

	if (loadingAuth) {
		return <AppLoading />;
	}
	if (!userAuth || errorAuth) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (userAuth && !loadingAuth) {		
		let userEmail: string = userAuth.email as string;
		console.log(userAuth.toJSON());
		
		auth.signin(userEmail, () => {});
	}
	return <Outlet />;
}

export default AuthWrapper;
