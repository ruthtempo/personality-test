export interface TestQuestion {
  id: number;
  question: string;
  answers: {
    a: Answer;
    b: Answer;
  };
}

type Answer = {
  text: string;
  value: "E" | "S" | "F" | "B" | "I" | "In" | "D" | "W";
};

export const personalityTest: TestQuestion[] = [
  {
    id: 1,
    question: "Es liegt mir eher,",
    answers: {
      a: { text: "wenn man mir etwas durch die Blume sagt.", value: "F" },
      b: { text: "wenn man „das Kind beim Namen nennt“.", value: "D" },
    },
  },
  {
    id: 2,
    question: "",
    answers: {
      a: {
        text: "Ich denke manchmal lange nach und sage dann trotzdem nichts.",
        value: "I",
      },
      b: { text: "Ich rede manchmal schneller als ich denke.", value: "E" },
    },
  },
  {
    id: 3,
    question: "Langfristige Pläne geben mir das Gefühl,",
    answers: {
      a: {
        text: "in einer Zwangsjacke zu stecken.",
        value: "W",
      },
      b: { text: "alles im Griff zu haben.", value: "B" },
    },
  },
  {
    id: 4,
    question: "Arbeiten, die Geduld und Sorgfalt erfordern,",
    answers: {
      a: {
        text: "sind für mich eher eine Quälerei.",
        value: "In",
      },
      b: { text: "machen mir meistens Spaß.", value: "S" },
    },
  },
  {
    id: 5,
    question: " Ich neige eher dazu,",
    answers: {
      a: {
        text: "ehrlich meine Meinung zu sagen.",
        value: "D",
      },
      b: { text: "auf Harmonie und Ausgleich bedacht zu sein.", value: "F" },
    },
  },
  {
    id: 6,
    question: "Für mich gilt eher:",
    answers: {
      a: {
        text: "Arbeit und Freizeit sind bei mir nicht so klar voneinander getrennt.",
        value: "W",
      },
      b: { text: "Erst die Arbeit, dann das Vergnügen.", value: "B" },
    },
  },
  {
    id: 7,
    question:
      "Wenn ich eine Entscheidung zu treffen habe, höre ich im Zweifelsfall auf ",
    answers: {
      a: {
        text: "meinen Bauch.",
        value: "F",
      },
      b: { text: "meinen Verstand.", value: "D" },
    },
  },
  {
    id: 8,
    question: "Wenn ich bastle oder handwerke,",
    answers: {
      a: {
        text: "tue ich dies sorgfältig und genau.",
        value: "S",
      },
      b: { text: "tue ich dies eher „Pi mal Daumen“.", value: "In" },
    },
  },
  {
    id: 9,
    question:
      "Wenn ich mich entscheiden müsste, würde ich mich eher bezeichnen als",
    answers: {
      a: {
        text: "Realisten.",
        value: "S",
      },
      b: { text: "Idealisten.", value: "In" },
    },
  },
  {
    id: 10,
    question: "",
    answers: {
      a: {
        text: "Bei mir hat alles seinen Platz.",
        value: "B",
      },
      b: { text: "Bei mir herrscht eher „kreatives Chaos", value: "W" },
    },
  },
  {
    id: 11,
    question: "Meiner Meinung nach ist die größere Tugend",
    answers: {
      a: {
        text: "Direktheit.",
        value: "D",
      },
      b: { text: "Taktgefühl.", value: "F" },
    },
  },
  {
    id: 12,
    question: "Meine Stärke liegt eher darin,",
    answers: {
      a: {
        text: "gut zu organisieren",
        value: "B",
      },
      b: { text: "flexibel auf Unerwartetes zu reagieren", value: "W" },
    },
  },
  {
    id: 13,
    question: "Wenn ich in Gesellschaft bin,",
    answers: {
      a: {
        text: "höre ich viel zu.",
        value: "I",
      },
      b: { text: "rede ich gern und viel.", value: "E" },
    },
  },
  {
    id: 14,
    question: "Wenn ich Probleme habe,",
    answers: {
      a: {
        text: "spreche ich, wenn überhaupt, mit wenigen Menschen darüber.",
        value: "I",
      },
      b: { text: "trage ich mein Herz auf der Zunge.", value: "E" },
    },
  },
  {
    id: 15,
    question: "",
    answers: {
      a: {
        text: "Ich würde mich eher als Gefühlsmenschen bezeichnen.",
        value: "F",
      },
      b: {
        text: "Ich würde mich eher als Kopfmenschen bezeichnen.",
        value: "D",
      },
    },
  },
  {
    id: 16,
    question: "Wenn ich Gäste erwarte,",
    answers: {
      a: {
        text: "habe ich meine Vorbereitungen in der Regel schon eine viertel Stunde, bevor die Gäste kommen, abgeschlossen.",
        value: "B",
      },
      b: {
        text: "bin ich noch bei den Vorbereitungen, während die Ersten eintreffen.",
        value: "W",
      },
    },
  },
  {
    id: 17,
    question: "",
    answers: {
      a: {
        text: "Ich habe eine gute Wahrnehmung für Details.",
        value: "S",
      },
      b: {
        text: "Ich habe eine schlechte Wahrnehmung für Details.",
        value: "In",
      },
    },
  },
  {
    id: 18,
    question: "",
    answers: {
      a: {
        text: "Ich weiß am Montag bereits gerne, was ich am Wochenende vorhabe.",
        value: "B",
      },
      b: {
        text: "Ich lasse das Wochenende am liebsten auf mich zukommen.",
        value: "W",
      },
    },
  },
  {
    id: 19,
    question: " Ich tanke meine Batterien am besten auf,",
    answers: {
      a: {
        text: "wenn ich in netter Gesellschaft bin.",
        value: "E",
      },
      b: {
        text: "wenn ich alleine bin.",
        value: "I",
      },
    },
  },
  {
    id: 20,
    question: "Es macht mir mehr Spaß,",
    answers: {
      a: {
        text: "etwas Neues zu entwerfen.",
        value: "In",
      },
      b: {
        text: "einen bestehenden Entwurf so lange zu überarbeiten, bis er funktioniert.",
        value: "S",
      },
    },
  },
  {
    id: 21,
    question: "Es nervt mich eher,",
    answers: {
      a: {
        text: "wenn Leute sich nicht an Verabredungen halten.",
        value: "B",
      },
      b: {
        text: "wenn Leute unflexibel sind.",
        value: "W",
      },
    },
  },
  {
    id: 22,
    question: "",
    answers: {
      a: {
        text: "Meine Gefühle sind mir meist recht deutlich anzumerken.",
        value: "E",
      },
      b: {
        text: "Andere können nicht so leicht erkennen, was in mir vorgeht.",
        value: "I",
      },
    },
  },
  {
    id: 23,
    question: "",
    answers: {
      a: {
        text: "Es passiert mir häufig, dass ich Sachen auf den letzten Drücker erledige.",
        value: "W",
      },
      b: {
        text: "Meistens habe ich eine gute Zeiteinteilung.",
        value: "B",
      },
    },
  },
  {
    id: 24,
    question: "",
    answers: {
      a: {
        text: "Ich habe eher eine philosophische Ader.",
        value: "In",
      },
      b: {
        text: "Ich habe eher eine praktische Ader.",
        value: "S",
      },
    },
  },
  {
    id: 25,
    question: "Ich entscheide und beurteile",
    answers: {
      a: {
        text: "eher objektiv/sachlich.",
        value: "D",
      },
      b: {
        text: "eher subjektiv/gefühlsmäßig.",
        value: "F",
      },
    },
  },
  {
    id: 26,
    question: "Wenn ich über längere Zeit mit anderen Menschen zusammen bin,",
    answers: {
      a: {
        text: "finde ich das nicht anstrengend.",
        value: "E",
      },
      b: {
        text: "finde ich das oft ermüdend und anstrengend.",
        value: "I",
      },
    },
  },
  {
    id: 27,
    question: "Ich bevorzuge eher eine Arbeit,",
    answers: {
      a: {
        text: "bei der soziale Fähigkeiten und Einfühlungsvermögen gefragt sind.",
        value: "F",
      },
      b: {
        text: "bei der rationales Handeln und analytisches Denken gefragt sind.",
        value: "D",
      },
    },
  },
  {
    id: 28,
    question: "Ich verlasse mich lieber",
    answers: {
      a: {
        text: "auf meine fünf Sinne.",
        value: "S",
      },
      b: {
        text: "auf meine Intuition.",
        value: "In",
      },
    },
  },
  {
    id: 29,
    question: "Wenn ich mit einer Gruppe von Freunden verreise,",
    answers: {
      a: {
        text: "kann ich diese fast ständig um mich haben.",
        value: "E",
      },
      b: {
        text: "brauche ich zwischendurch Zeit für mich allein.",
        value: "I",
      },
    },
  },
  {
    id: 30,
    question: "",
    answers: {
      a: {
        text: "Ich formuliere meine Gedanken und Gefühle meist spontan.",
        value: "E",
      },
      b: {
        text: "Ich überlege meist länger, bevor ich meine Gedanken und Gefühle äußere.",
        value: "I",
      },
    },
  },
  {
    id: 31,
    question: "Ich mag es,",
    answers: {
      a: {
        text: "wenn jemand eine bildreiche Sprache benutzt und seine Rede ausschmückt.",
        value: "In",
      },
      b: {
        text: "wenn sich jemand präzise ausdrückt und schnell zum Punkt kommt.",
        value: "S",
      },
    },
  },
  {
    id: 32,
    question: "Ich arbeite lieber in einem Bereich,",
    answers: {
      a: {
        text: "in dem viele neue Konzepte gefragt sind.",
        value: "In",
      },
      b: {
        text: "in dem es auf Genauigkeit und Faktenwissen ankommt.",
        value: "S",
      },
    },
  },
  {
    id: 33,
    question: "",
    answers: {
      a: {
        text: "Ich ahne schon früh, wenn sich zwei verlieben.",
        value: "F",
      },
      b: {
        text: "Ich bin oft einer der letzten, der merkt, wenn es zwischen zweien gefunkt hat.",
        value: "D",
      },
    },
  },
  {
    id: 34,
    question: "",
    answers: {
      a: {
        text: "Unangenehme Dinge packe ich meistens an, um sie hinter mich zu bringen.",
        value: "B",
      },
      b: {
        text: "Unangenehme Dinge schiebe ich häufig auf die lange Bank.",
        value: "W",
      },
    },
  },
  {
    id: 35,
    question: "Wenn ich auf einer Party bin,",
    answers: {
      a: {
        text: "spreche ich eher nicht so gern fremde Menschen an.",
        value: "I",
      },
      b: {
        text: "spreche ich gern fremde Menschen an.",
        value: "E",
      },
    },
  },
  {
    id: 36,
    question: "Wenn ich vor einer schwierigen Aufgabe stehe,",
    answers: {
      a: {
        text: "lege ich los, wenn ich mir eine grobe Skizze über meine Vorgehensweise gemacht habe.",
        value: "In",
      },
      b: {
        text: "plane ich die einzelnen Schritte recht genau.",
        value: "S",
      },
    },
  },
  {
    id: 37,
    question: "",
    answers: {
      a: {
        text: "Ich erlebe meine Gefühle eher spontan und intensiv.",
        value: "E",
      },
      b: {
        text: "Ich bin eher nicht so schnell in Gefühlswallungen zu versetzen.",
        value: "I",
      },
    },
  },
  {
    id: 38,
    question: "Ich arbeite am effektivsten",
    answers: {
      a: {
        text: "am Ende, wenn die Zeit drängt.",
        value: "W",
      },
      b: {
        text: "im Vorfeld, wenn ich weiß, dass mir noch genügend Zeit bleibt.",
        value: "B",
      },
    },
  },
  {
    id: 39,
    question: "Es bereitet mir mehr Spaß,",
    answers: {
      a: {
        text: "mich über Sachthemen zu unterhalten.",
        value: "D",
      },
      b: {
        text: "mich über zwischenmenschliche Beziehungen zu unterhalten.",
        value: "F",
      },
    },
  },
  {
    id: 40,
    question: "",
    answers: {
      a: {
        text: "Ich sinniere gern über die „großen Fragen des Lebens“.",
        value: "In",
      },
      b: {
        text: "Ich wende mich lieber handfesten Dingen zu.",
        value: "S",
      },
    },
  },
];
