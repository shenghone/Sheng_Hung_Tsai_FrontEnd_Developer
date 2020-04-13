import React, { useState } from "react";

const MenuContext = React.createContext(null);

export const MenuContextProvider = ({ children }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <MenuContext.Provider value={{ displayMenu, setDisplayMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
