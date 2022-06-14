import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar style={{ position: "staic" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-around", position: 'static' }}>
          <Link to={"/"}>
            <Typography>Home</Typography>{" "}
          </Link>

          <Link to={"/register"}>
            <Typography>Register</Typography>{" "}
          </Link>

          <Link to={"/login"}>
            <Typography>Login</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
