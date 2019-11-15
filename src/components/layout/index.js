import React, { useState } from "react";

import Nav from "./nav";
import SideMenuDrawer from "./side-menu-drawer";

export const LayoutPage = ({ children }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div>
      <Nav setOpenSideMenu={setOpenSideMenu} />
      <SideMenuDrawer open={openSideMenu} setOpen={setOpenSideMenu} />

      {children}
    </div>
  );
};

export default LayoutPage;
