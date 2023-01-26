import { Box, Button } from "@chakra-ui/react";
import { Radar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { Answer } from "../DATA";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Results = (p: {
  answers: Answer["value"][];
  resetTest: () => void;
}) => {
  const navigate = useNavigate();
  const qualities = { E: 0, I: 0, In: 0, S: 0, F: 0, D: 0, B: 0, W: 0 };

  const answersSum = p.answers.reduce((obj, name) => {
    obj[name]++;
    return obj;
  }, qualities);

  console.log(answersSum);

  const data = {
    labels: [
      "Extraversion",
      "Intraversion",
      "Intuitive Wahnehmung",
      "Sinliche Wahrnehmung",
      "fuhlentscheidung",
      "Denkentcheidung",
      "beurteilende Einstellung",
      "wahnehmende Einstellung",
    ],
    datasets: [
      {
        label: "My personality results",
        data: [answersSum],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Radar data={data} />
      <Button
        onClick={() => {
          p.resetTest();
          navigate("/");
        }}
      >
        Test erneut machen
      </Button>
    </Box>
  );
};
