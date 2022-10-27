import React, { useState } from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import "./styles/App.css";
const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "light" : "dark"}>
      <Nav theme={theme} setTheme={setTheme} />
      <Outlet />
    </div>
  );
};

export default App;
