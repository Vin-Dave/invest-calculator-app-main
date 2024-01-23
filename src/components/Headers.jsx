import React from "react";
import logoImg from "../assets/logo.png";

export function Headers() {
  return (
    <div id="header">
      <img src={logoImg} alt={logoImg} />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
