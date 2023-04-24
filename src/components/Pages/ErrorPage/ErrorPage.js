import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const backToHomeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <Container fixed>
        <Typography
          variant="subtitle1"
          mt={2}
          mb={4}
          textAlign={"center"}
          color={"gray"}
        >
          <p>Page not found.</p>
          <Stack spacing={2} alignItems='center' justifyContent='center'>
            <Button  onClick={backToHomeHandler} variant="text">Back to Home Page</Button>
          </Stack>
        </Typography>
      </Container>
    </>
  );
};

export default ErrorPage;
