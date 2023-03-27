import React from "react";
import style from "@assets/styles/Background.module.css";

// This component uses the background-image properties in the Background.module.css file to
// display an animated background image.

// In its original iteration, it was used as a route @ /background
// to provide an animated background to a presentation.

export default function Background() {
  return (
    <div className="background">
      <div className="overlay1" />
      <div className="overlay2" />
    </div>
  );
}
