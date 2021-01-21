import React, { useState, useEffect } from "react";
import GameCard from "../Components/GameCard";
import { Profile } from "./Profile";

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

  useEffect(()=> {
    return <Profile levels={position}/>
  }, [position])

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
