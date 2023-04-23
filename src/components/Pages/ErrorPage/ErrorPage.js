import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


const ErrorPage = () => {
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
        </Typography>
      </Container>
    </>
  );
};

export default ErrorPage;
