import React from "react";
import menus from "../data/menus.json";

export type MenuType = {
	url: string;
	name: string;
	icon: string;
};
export type AppMenuType = {
	menus: {
		top: MenuType[];
		bottom: MenuType[];
	};
};
const MenuContext = React.createContext<AppMenuType>(null!);
export default MenuContext;

const appMenu = menus;

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<MenuContext.Provider value={appMenu}>{children}</MenuContext.Provider>
	);
};

export { MenuProvider };
