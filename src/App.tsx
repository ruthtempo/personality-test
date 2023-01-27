import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Answer } from "./DATA";
import { Form } from "./pages/Form";
import { HomePage } from "./pages/Home";

export interface LocalStorage {
  answers: Answer["value"][];
  user: string;
}

const getSavedAnswers = () => {
  const maybeSavedAnswers = localStorage.getItem("MyAnswers");
  const savedAnswers: LocalStorage =
    maybeSavedAnswers !== null ? JSON.parse(maybeSavedAnswers) : {};

  return savedAnswers;
};

function App() {
  const [answers, setAnswers] = useState<Answer["value"][]>(
    getSavedAnswers().answers ?? []
  );
  const [userName, setUserName] = useState<string>(
    getSavedAnswers().user ?? ""
  );

  const answerQuestion = (answer: Answer["value"]) => {
    const newAnswers = answers.concat(answer);
    setAnswers(newAnswers);
    localStorage.setItem(
      "MyAnswers",
      JSON.stringify({ answers: newAnswers, user: userName })
    );
  };

  const resetTest = () => {
    setAnswers([]);
    setUserName("");
    localStorage.clear();
  };

  return (
    <ChakraProvider>
      <Container h="100vh" centerContent justifyContent="center">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setUserName={setUserName} resetTest={resetTest} />
            }
          />
          <Route
            path="/form"
            element={
              <Form
                answerQuestion={answerQuestion}
                answers={answers}
                resetTest={resetTest}
                userName={userName}
              />
            }
          />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
