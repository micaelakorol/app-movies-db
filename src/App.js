import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Nav from "./components/Navigation/Nav";
import useLoading from "./services/hooks/useLoading";
const App = () => {
  const [theme, setTheme] = useState(false);
  const {LoadingErrorComponent} = useLoading()

  return (
    <div className={theme ? "light" : "dark"}>
      <Nav theme={theme} setTheme={setTheme} />
      {LoadingErrorComponent()}
      <Outlet theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
