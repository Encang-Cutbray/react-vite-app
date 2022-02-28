import React from "react";
import AuthContext from "../state/auth-context";

export default function useAuth() {
	return React.useContext(AuthContext);
}
