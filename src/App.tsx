import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "./pages/Form";
import { HomePage } from "./pages/Home";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");

  return (
    <ChakraProvider>
      <Container display="flex" h="100vh" centerContent justifyContent="center">
        <Flex>
          {currentPage === "homepage" ? (
            <HomePage setCurrentPage={setCurrentPage} />
          ) : (
            <Form />
          )}
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
