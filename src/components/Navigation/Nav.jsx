import { Switch } from "@mui/material";
import React from "react";
import "../../styles/nav.css";
import Link from "./Link";
const Nav = ({ theme, setTheme }) => {
  return (
    <header>
      <nav>
        <Link />
        <Switch
          onClick={() => setTheme(!theme)}
          defaultChecked
          color="default"
          aria-pressed={theme}
          aria-describedby="Theme light-dark"
        />
      </nav>
    </header>
  );
};

export default Nav;
