import React, { useState } from "react";
import Container from "@material-ui/core/Container";

import Nav from "./nav";
import SideMenuDrawer from "./side-menu-drawer";

export const LayoutPage = ({ children }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div>
      <Nav setOpenSideMenu={setOpenSideMenu} />
      <SideMenuDrawer open={openSideMenu} setOpen={setOpenSideMenu} />

      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </div>
  );
};

export default LayoutPage;
