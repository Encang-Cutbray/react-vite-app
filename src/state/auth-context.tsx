import React from "react";

/**
 * Context React Hook
 */
export type AuthContextType = {
	user: any;
	signin: (user: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
};

const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;

/**
 * Helper Function
 */
const fakeAuthProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = true;
		setTimeout(callback, 100); // fake async
	},
	signout(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = false;
		setTimeout(callback, 100);
	},
};

/**
 * Auth Provider Component
 */

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	let [user, setUser] = React.useState<any>(null);

	let signin = (newUser: string, callback: VoidFunction) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	let signout = (callback: VoidFunction) => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	let value = { user, signin, signout };

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export { AuthProvider };
