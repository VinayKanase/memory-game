import React from "react";
import "../css/Score.css";
function Score({ score, bestScore }) {
  return (
    <div className="score">
      <h2>
        Score:
        <span>{score}</span>
      </h2>
      <div className="vr"></div>
      <h2>
        Best Score:<span>{bestScore}</span>
      </h2>
    </div>
  );
}

export default Score;
