import { createContext, useContext, useState } from "react";
import React from "react";
import { Answer } from "../DATA";

interface UserContextProps {
  answers: Answer["value"][];
  userName: string;
  answerQuestion: (answer: Answer["value"]) => void;
  resetTest: () => void;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

interface LocalStorage {
  answers: Answer["value"][];
  user: string;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const getSavedAnswers = () => {
  const maybeSavedAnswers = localStorage.getItem("MyAnswers");
  const savedAnswers: LocalStorage =
    maybeSavedAnswers !== null ? JSON.parse(maybeSavedAnswers) : {};

  return savedAnswers;
};

export const UserContextProvider = (p: { children: JSX.Element }) => {
  const [answers, setAnswers] = useState<Answer["value"][]>(
    getSavedAnswers().answers ?? []
  );
  const [userName, setUserName] = useState<string>(
    getSavedAnswers().user ?? ""
  );

  const answerQuestion = (answer: Answer["value"]) => {
    const newAnswers = answers.concat(answer);
    setAnswers(newAnswers);
    localStorage.setItem(
      "MyAnswers",
      JSON.stringify({ answers: newAnswers, user: userName })
    );
  };

  const resetTest = () => {
    setAnswers([]);
    setUserName("");
    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{ answers, userName, answerQuestion, resetTest, setUserName }}
    >
      {p.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be provided");
  }
  return context;
};
