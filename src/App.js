import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Nav from "./components/Navigation/Nav";
const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme ? "light" : "dark"}>
      <Nav theme={theme} setTheme={setTheme} />
      <Outlet theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
