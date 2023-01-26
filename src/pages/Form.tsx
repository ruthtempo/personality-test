import { Box, Button, Progress, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Answer, personalityTest } from "../DATA";
import { Results } from "./Results";

export const Form = (p: {
  answerQuestion: (answer: Answer["value"]) => void;
}) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [progress, setProgress] = useState(0);

  //getting progress from localStorage
  const getCurrentProgress = () => {
    const currentProgress = localStorage.getItem("currentProgress");
    if (currentProgress !== null) {
      const progressObject = JSON.parse(currentProgress);
      return progressObject;
    }
  };

  useEffect(() => {
    const currentProgress = getCurrentProgress();
    setProgress(currentProgress.progress);
    setCurrentQuestionId(currentProgress.questionId);
  }, []); // on first render - refresh we get our current progress

  const optionA = personalityTest[currentQuestionId]?.answers.a;
  const optionB = personalityTest[currentQuestionId]?.answers.b;

  const answerQuestion = (answer: Answer["value"]) => {
    p.answerQuestion(answer);
    const currentProgress = progress + 2.5;
    setProgress(currentProgress);
    const nextQuestion = currentQuestionId + 1;
    setCurrentQuestionId(nextQuestion); //moving to the next question

    const answerProgress = {
      questionId: nextQuestion,
      progress: currentProgress,
    };
    localStorage.setItem("currentProgress", JSON.stringify(answerProgress)); // saving the current -not answered- question in storage
  };

  return currentQuestionId < personalityTest.length ? (
    <Box display="flex" flexDirection={"column"}>
      <Text>
        Question {currentQuestionId + 1} of {personalityTest.length}
      </Text>

      <Progress value={progress} my={4} colorScheme="teal" />
      <Text fontSize="4xl" textAlign="center">
        {personalityTest[currentQuestionId].question}
      </Text>
      <Stack spacing={4} justifyContent="space-around" my={8}>
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
  ) : (
    <Results />
  );
};
