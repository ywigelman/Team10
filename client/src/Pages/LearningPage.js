import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import GameCard from "../Components/GameCard";

const tutorial = ["A", "B", "C", "D", "E", "F", "G"];

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

  // props for MainScreen ->
  // position={position} total={tutorial.length - 1} next={nextPosition} prev={prevPosition}

  // put all these inside MainScreen component
  //-start

  //-end

  return (
    <>
      <h1>Learning Page</h1>

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
