import React from "react";
import { Button } from "./Button";

interface CardProps {
  title: string;
  description: string;
  colorScheme: "violet" | "blue" | "green" | "red";
}

const colorMappings = {
  violet: {
    background: "bg-gradient-to-b from-violet-500/80 to-violet-500",
    description: "text-violet-200",
    button: "!bg-violet-400 hover:shadow-violet-600",
  },
  blue: {
    background: "bg-gradient-to-b from-blue-500/80 to-blue-500",
    description: "text-blue-200",
    button: "!bg-blue-400 hover:shadow-blue-600",
  },
  red: {
    background: "bg-gradient-to-b from-red-500/80 to-red-500",
    description: "text-red-200",
    button: "!bg-red-400 hover:shadow-red-600",
  },
  green: {
    background: "bg-gradient-to-b from-green-500/80 to-green-500",
    description: "text-green-200",
    button: "!bg-green-400 hover:shadow-green-600",
  },
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  colorScheme,
}) => {
  return (
    <div className={`p-6 rounded-2xl ${colorMappings[colorScheme].background}`}>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className={`${colorMappings[colorScheme].description} mt-2`}>
        {description}
      </p>
      <Button
        className={`bg-violet-400 mt-10 ${colorMappings[colorScheme].button}`}
      >
        Learn More
      </Button>
    </div>
  );
};
