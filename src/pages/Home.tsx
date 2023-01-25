import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
} from "@chakra-ui/react";

export const HomePage = (p: {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Card mt={3}>
      <CardHeader>
        <Heading size="lg">Fragen zur Persönlichkeit</Heading>
      </CardHeader>
      <CardBody>
        Zu jeder Frage gibt es zwei Antwortmöglichkeiten. Entscheide Dich bitte
        möglichst spontan für eine der beiden Alternativen. Wähle die Antwort,
        die Dir auf den ersten Blick am treffendsten erscheint und von welcher
        Du Dich stärker angesprochen fühlst. Beantworte diese Fragen bitte so,
        wie es für Dein Privatleben zutrifft.
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => p.setCurrentPage("form")}
        >
          Los Geht's!
        </Button>
      </CardFooter>
    </Card>
  );
};
