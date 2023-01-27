import { Badge, Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { PolarArea } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { Answer } from "../DATA";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const Results = (p: {
  answers: Answer["value"][];
  resetTest: () => void;
  userName: string;
}) => {
  const navigate = useNavigate();
  const qualities = { E: 0, I: 0, In: 0, S: 0, F: 0, D: 0, B: 0, W: 0 };

  const answersSum = p.answers.reduce((obj, name) => {
    obj[name]++;
    return obj;
  }, qualities);

  const points = Object.values(answersSum);

  const data = {
    labels: [
      "Extraversion",
      "Intraversion",
      "intuitive Wahrnehmung",
      "sinliche Wahrnehmung",
      "Fuhlentscheidung",
      "Denkentcheidung",
      "beurteilende Einstellung",
      "wahnehmende Einstellung",
    ],
    datasets: [
      {
        label: "My Personality Results",
        data: points,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 239, 83, 0.8)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 186, 55, 0.8)",
          "rgba(130, 188, 108, 0.8)",
          "rgba(245, 40, 145, 0.8)",
        ],
        borderColor: "rgba(0, 128, 128,1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box display="flex" alignItems="center" flexDirection="column" w={"100%"}>
      <Text fontSize="lg" align="center" mb={4}>
        {p.userName.toUpperCase()}, deine Personlichkeismerkmale
      </Text>
      <SimpleGrid columns={2} spacing={2} mb={4}>
        {data.labels.map((label, i) => (
          <Badge
            key={label}
            backgroundColor={data.datasets[0].backgroundColor[i]}
            textTransform="none"
            isTruncated
          >
            {label}
          </Badge>
        ))}
      </SimpleGrid>

      <PolarArea
        data={data}
        data-test="results-chart"
        options={{ plugins: { legend: { display: false } } }}
      />
      <Button
        data-test="reset-button"
        onClick={() => {
          p.resetTest();
          navigate("/");
        }}
        colorScheme="teal"
        my={4}
      >
        Test wiederholen
      </Button>
    </Box>
  );
};
