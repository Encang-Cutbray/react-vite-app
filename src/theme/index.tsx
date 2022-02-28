import { extendTheme, IconProps } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

import "@fontsource/poppins";
import { IconType } from "react-icons";

const theme = extendTheme({
	breakpoints: createBreakpoints({
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
	}),
	fonts: {
		heading: "Poppins",
		body: "Poppins",
	},
});

export default theme;
