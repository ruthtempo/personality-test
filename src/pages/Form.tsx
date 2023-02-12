import { Box, Button, Progress, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { personalityTest } from "../DATA";
import { Results } from "./Results";

export const Form = () => {
  const { answers, userName, resetTest, answerQuestion } = useUserContext();
  const progress = (answers.length / personalityTest.length) * 100;

  const optionA = personalityTest[answers.length]?.answers.a;
  const optionB = personalityTest[answers.length]?.answers.b;

  return answers.length < personalityTest.length ? (
    <Box display="flex" flexDirection={"column"}>
      <Text>
        Frage {answers.length + 1} von {personalityTest.length}
      </Text>
      <Progress value={progress} my={4} colorScheme="teal" />
      <Text fontSize="3xl" textAlign="center">
        {personalityTest[answers.length].question}
      </Text>
      <Stack spacing={4} justifyContent="space-around" my={8}>
        <Button
          data-test="option-0"
          onClick={() => answerQuestion(optionA.value)}
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
          onClick={() => answerQuestion(optionB.value)}
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
    <Results answers={answers} resetTest={resetTest} userName={userName} />
  );
};
