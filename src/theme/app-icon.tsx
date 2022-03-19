import {
	MdOutlineHome,
	MdOutlineOutbox,
	MdPersonOutline,
	MdNotifications,
	MdArrowBack,
	MdCameraEnhance,
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
	MdCameraEnhance,
	AppLogo,
} as AppIconType;

export default AppIcon;
