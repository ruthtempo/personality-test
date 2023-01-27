import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
  const [answers, setAnswers] = useState<Answer["value"][]>(getSavedAnswers());

  const answerQuestion = (answer: Answer["value"]) => {
    const newAnswers = answers.concat(answer);
    setAnswers(newAnswers);
    localStorage.setItem("MyAnswers", JSON.stringify(newAnswers));
  };

  const resetTest = () => {
    setAnswers([]);
    localStorage.setItem("MyAnswers", JSON.stringify([]));
  };

  return (
    <ChakraProvider>
      <Container h="100vh" centerContent justifyContent="center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/form"
            element={
              <Form
                answerQuestion={answerQuestion}
                answers={answers}
                resetTest={resetTest}
              />
            }
          />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
