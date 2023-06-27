import { Switch } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = ({ theme, setTheme }) => {
  const logo = 'https://i.ibb.co/3Mf9dwj/logo.png'
  return (
    <header>
      <nav>
        <NavLink to={"/"}>
          <img
            src={logo}
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
          aria-pressed={theme}
          aria-describedby='Theme light-dark'
        />
      </nav>
    </header>
  );
};

export default Nav;
