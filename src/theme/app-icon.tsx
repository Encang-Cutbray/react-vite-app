import {
	MdOutlineHome,
	MdOutlineOutbox,
	MdPersonOutline,
	MdNotifications,
	MdArrowBack
} from "react-icons/md";

import AppLogo from "../styles/favicon.svg";

import { IconType } from "react-icons";

export type AppIconType = {
	[key: string]: IconType | undefined | any | string;
};

const AppIcon = {
	MdOutlineHome,
	MdOutlineOutbox,
	MdPersonOutline,
	MdNotifications,
	MdArrowBack,
	AppLogo,
} as AppIconType;

export default AppIcon;
