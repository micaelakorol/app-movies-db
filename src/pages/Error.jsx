import React from "react";
import {useRouteError} from 'react-router-dom'

const Error = () => {
  let error = useRouteError();
console.error(error);
  return <div className="title" style={{height:'100vh', fontSize:'1.6rem', alignItems:'start'}}>{error} Ups...The page does not exist :/</div>;
};

export default Error;
