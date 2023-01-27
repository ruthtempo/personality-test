import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = (p: {
  setUserName: (name: string) => void;
  resetTest: () => void;
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);

  const handleStart = (name: string) => {
    p.resetTest();
    if (name.trim() === "") {
      setIsError(true);
    } else {
      setIsError(false);
      p.setUserName(name);
      navigate("/form");
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

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
        <SimpleGrid columns={{ md: 2 }} spacing={5}>
          <FormControl isRequired isInvalid={isError}>
            <Input
              data-test="name-input"
              placeholder="Dein Name"
              value={name}
              onChange={handleInputChange}
            />
            {isError && (
              <FormErrorMessage data-test="error-no-name">
                Pflichtfeld
              </FormErrorMessage>
            )}
          </FormControl>
          <Button
            data-test="start-test-button"
            colorScheme={"teal"}
            variant="solid"
            onClick={() => handleStart(name)}
          >
            Los Geht's!
          </Button>
        </SimpleGrid>
      </CardFooter>
    </Card>
  );
};
