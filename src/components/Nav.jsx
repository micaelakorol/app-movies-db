import { Switch } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = ({ theme, setTheme }) => {
  return (
    <div className="container-nav">
      <nav className="nav">
        <NavLink to={"/"}>
          <img
            src={require("../images/logo.png")}
            alt=""
            className="logo-movie"
          />{" "}
        </NavLink>
        <NavLink to={"/top"}>On the air</NavLink>
        <NavLink to={"/movies"}>Movies</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>

        <Switch
          onClick={() => setTheme(!theme)}
          defaultChecked
          color="default"
        />
      </nav>
    </div>
  );
};

export default Nav;
