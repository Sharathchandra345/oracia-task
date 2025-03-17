"use client";

import { createContext, useContext, useState } from "react";

export type Message = {
  sender: "OracIA" | "User";
  text: string;
};

export type Suggestion = {
  text: string;
  nextStep: number;
};

export type ConversationStep = {
  message: Message;
  suggestions?: Suggestion[];
};

export const conversationFlow: ConversationStep[] = [
  {
    message: {
      sender: "OracIA",
      text: "Hello Fabio Rossi, welcome to ORAVOX, I’m OracIA, your sales intelligence agent. To tailor your experience, please select your role.",
    },
    suggestions: [
      { text: "I am an Owner/Manager", nextStep: 1 },
      { text: "I am a Realtor", nextStep: 1 },
    ],
  },
  {
    message: {
      sender: "OracIA",
      text: "Understood, how many Realtors are in your organization? (You can type the number to be more precise if you want)",
    },
    suggestions: [
      { text: "Less than 9 Realtors", nextStep: 2 },
      { text: "Between 10 to 19 Realtors", nextStep: 2 },
    ],
  },
  {
    message: {
      sender: "OracIA",
      text: "Roger that, what’s the name of the real estate company? (Please type it or use suggestion)",
    },
    suggestions: [{ text: "Evolua Imóveis", nextStep: 3 }],
  },
  {
    message: {
      sender: "OracIA",
      text: "Great name! In order for me to enhance my intelligence recommendation system to your company, please provide me with the company’s address.",
    },
  },
];

type ConversationContextType = {
  messages: Message[];
  currentStep: number;
  handleUserResponse: (response: string, nextStep: number) => void;
};

const ConversationContext = createContext<ConversationContextType | undefined>(
  undefined
);

export const ConversationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<Message[]>([
    conversationFlow[0].message,
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleUserResponse = (response: string, nextStep: number) => {
    setMessages((prev) => [
      ...prev,
      { sender: "User", text: response },
      conversationFlow[nextStep].message,
    ]);
    setCurrentStep(nextStep);
  };

  return (
    <ConversationContext.Provider
      value={{ messages, currentStep, handleUserResponse }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }
  return context;
};
