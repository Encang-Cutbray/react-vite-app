import React from "react";
import footerJson from "../data/footer.json";

const { menu: {top: navTop, bottom : navFooter} } = footerJson;

export default React.createContext(navFooter);

export { navFooter, navTop };
