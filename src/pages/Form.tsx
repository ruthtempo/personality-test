import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Answer, personalityTest } from "../DATA";

export const Form = (p: {
  answerQuestion: (answer: Answer["value"]) => void;
}) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);

  const optionA = personalityTest[currentQuestionId].answers.a;
  const optionB = personalityTest[currentQuestionId].answers.b;

  const answerQuestion = (answer: Answer["value"]) => {
    setCurrentQuestionId(currentQuestionId + 1);
    p.answerQuestion(answer);
  };

  return (
    <Box>
      <Text fontSize="4xl">{personalityTest[currentQuestionId].question}</Text>
      <Stack direction={["column", "row"]} spacing={4}>
        <Button
          onClick={() => answerQuestion(optionA.value)}
          variant="solid"
          colorScheme="teal"
        >
          {optionA.text}
        </Button>
        <Button
          onClick={() => answerQuestion(optionB.value)}
          variant="solid"
          colorScheme="teal"
        >
          {optionB.text}
        </Button>
      </Stack>
    </Box>
  );
};
