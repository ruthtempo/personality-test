import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Answer } from "./DATA";
import { Form } from "./pages/Form";
import { HomePage } from "./pages/Home";

const getSavedAnswers = () => {
  const maybeSavedAnswers = localStorage.getItem("MyAnswers");
  const savedAnswers: Answer["value"][] =
    maybeSavedAnswers !== null ? JSON.parse(maybeSavedAnswers) : [];

  return savedAnswers;
};

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const [answers, setAnswers] = useState<Answer["value"][]>(getSavedAnswers());

  const answerQuestion = (answer: Answer["value"]) => {
    const newAnswers = answers.concat(answer);
    setAnswers(newAnswers);
    localStorage.setItem("MyAnswers", JSON.stringify(answers));
  };

  return (
    <ChakraProvider>
      <Container display="flex" h="100vh" centerContent justifyContent="center">
        <Flex>
          {currentPage === "homepage" ? (
            <HomePage setCurrentPage={setCurrentPage} />
          ) : (
            <Form answerQuestion={answerQuestion} />
          )}
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
