import React from "react";
import { CountdownClock } from "../Components/CountdownClock";
import ControlledCarousel from "../Components/Carousel";
import MainScreen from "../Components/MainScreen";

export function LearningPage() {
  return (
    <div>
      <h1>Learning Page</h1>

      <CountdownClock />
      <div>
        <ControlledCarousel />
        <MainScreen />
      </div>
    </div>
  );
}
