import React, { useState } from "react";
import GameCard from "../Components/GameCard";

const tutorial = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function LearningPage() {
  // exercise position handling
  const [position, setPosition] = useState(0);

  const nextPosition = () => {
    console.log("working");
    if (position < tutorial.length - 1) {
      setPosition(position + 1);
    }
  };
  const prevPosition = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <>
      <GameCard
        letter={tutorial[position]}
        position={position}
        total={tutorial.length - 1}
        next={nextPosition}
        prev={prevPosition}
      />
    </>
  );
}
