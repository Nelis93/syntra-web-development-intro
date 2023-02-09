import React from "react";
import { useState } from "react";

const NavContext = React.createContext();
export default NavContext;

export function NavProvider({ children }) {
  const [showNav, setshowNav] = useState(false);

  // const toggleNav = () => {
  //   if (showNav.display === "block") {
  //     setshowNav({ display: "none" });
  //   } else {
  //     setshowNav({ display: "block" });
  //   }
  // };
  const toggleShowNav = () => {
    setshowNav(!showNav);
  };

  return (
    <NavContext.Provider value={{ showNav, toggleShowNav }}>
      {children}
    </NavContext.Provider>
  );
}
