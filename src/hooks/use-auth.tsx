import React from "react";
import AuthContext, { AuthContextType } from "../state/auth-context";

export default function useAuth() {
	return React.useContext(AuthContext);
}
