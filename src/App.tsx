import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Form } from "./pages/Form";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Container h="100vh" centerContent justifyContent="center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
