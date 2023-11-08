import { Container } from "@mui/material";
import React from "react";
import { Roller } from "react-css-spinners";
import "./loading.css";
import { useFetch } from "../../services/hooks/useFetch";

const Loading = () => {
  const { loading } = useFetch();
  return (
    <>
      {loading && (
        <Container>
          <Roller color="#E50914" size={60} className="loading" />
        </Container>
      )}
    </>
  );
};

export default Loading;
