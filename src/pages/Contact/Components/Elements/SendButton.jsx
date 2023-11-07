import React from "react";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";

const SendButton = () => {
  return (
    <>
      <button type="submit" className="btn-form">
        Send
      </button>
      <Link to="/">
        <Arrow />
      </Link>
    </>
  );
};

export default SendButton;
