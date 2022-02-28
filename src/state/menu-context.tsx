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

const { menus: { top: navTop } } = menus;

const MenuContext = React.createContext<AppMenuType>(null!);

export default MenuContext;

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const appMenu = menus;
	return (
		<MenuContext.Provider value={appMenu}>{children}</MenuContext.Provider>
	);
};

export { navTop, MenuProvider };
