import { Box, Button, Progress, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Answer, personalityTest } from "../DATA";
import { Results } from "./Results";

export const Form = (p: {
  answerQuestion: (answer: Answer["value"]) => void;
  answers: Answer["value"][];
  resetTest: () => void;
  userName: string;
}) => {
  const progress = (p.answers.length / personalityTest.length) * 100;

  const optionA = personalityTest[p.answers.length]?.answers.a;
  const optionB = personalityTest[p.answers.length]?.answers.b;

  return p.answers.length < personalityTest.length ? (
    <Box display="flex" flexDirection={"column"}>
      <Text>
        Frage {p.answers.length + 1} von {personalityTest.length}
      </Text>
      <Progress value={progress} my={4} colorScheme="teal" />
      <Text fontSize="3xl" textAlign="center">
        {personalityTest[p.answers.length].question}
      </Text>
      <Stack spacing={4} justifyContent="space-around" my={8}>
        <Button
          data-test="option-0"
          onClick={() => p.answerQuestion(optionA.value)}
          variant="solid"
          colorScheme="teal"
          whiteSpace="normal"
          h="auto"
          p={3}
        >
          {optionA.text}
        </Button>
        <Button
          data-test="option-1"
          onClick={() => p.answerQuestion(optionB.value)}
          variant="solid"
          colorScheme="teal"
          whiteSpace="normal"
          h="auto"
          p={3}
        >
          {optionB.text}
        </Button>
      </Stack>
    </Box>
  ) : (
    <Results
      answers={p.answers}
      resetTest={p.resetTest}
      userName={p.userName}
    />
  );
};
