import React from "react";
import '../../styles/error.css'
import { useRouteError } from "react-router-dom";

const Error = () => {
  let error = useRouteError();
  console.error(error);
  return (
    <section
      className="title error"
    >
      {error} Ups...The page does not exist :/
    </section>
  );
};

export default Error;
