import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../variables";

const Link = () => {
  return (
    <>
      <NavLink to={"/"}>
        <img src={logo} alt="logo Movie Flix" className="logo-movie" />{" "}
      </NavLink>
      <NavLink to={"/top"}>More Views</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </>
  );
};

export default Link;
