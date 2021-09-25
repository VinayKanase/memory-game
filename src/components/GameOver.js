import React from "react";

function GameOver({ message, score, bestScore, onPlayAgain }) {
  return (
    <div className="gameOver">
      <div className="modal">
        <h2>{message}</h2>
        <div className="score">Score: {score}</div>
        <div className="bestScore">Best Score: {bestScore}</div>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOver;
