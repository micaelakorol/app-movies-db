import { Switch } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = ({ theme, setTheme }) => {
  return (
    <nav className="container-nav">
      <div className="nav">
        <NavLink to={"/"}>
          <img
            src={require("../images/logo.png")}
            alt="logo Movie Flix"
            className="logo-movie"
          />{" "}
        </NavLink>
        <NavLink to={"/top"}>More Views</NavLink>
        <NavLink to={"/movies"}>Movies</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>

        <Switch
          onClick={() => setTheme(!theme)}
          defaultChecked
          color="default"
        />
      </div>
    </nav>
  );
};

export default Nav;
