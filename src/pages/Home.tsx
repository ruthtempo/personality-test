import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Card data-test="start-card">
      <CardHeader>
        <Heading size="lg" color={"tomato"}>
          Fragen zur Persönlichkeit
        </Heading>
      </CardHeader>
      <CardBody data-test="card-body">
        Zu jeder Frage gibt es zwei Antwortmöglichkeiten. Entscheide Dich bitte
        möglichst spontan für eine der beiden Alternativen. Wähle die Antwort,
        die Dir auf den ersten Blick am treffendsten erscheint und von welcher
        Du Dich stärker angesprochen fühlst. Beantworte diese Fragen bitte so,
        wie es für Dein Privatleben zutrifft.
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          data-test="start-test-button"
          colorScheme={"teal"}
          variant="solid"
          onClick={() => navigate("/form")}
        >
          Los Geht's!
        </Button>
      </CardFooter>
    </Card>
  );
};
