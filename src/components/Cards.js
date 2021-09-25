import React from "react";
import "../css/Cards.css";
function Cards({ cardsList, onClick, endMessage, onPlayAgain }) {
  return (
    <div className="cards">
      {endMessage === "" ? (
        <div className="cards__container">
          {cardsList.map((card, i) => (
            <div
              onClick={onClick}
              key={i}
              className="card"
              data-name={card.name}
            >
              <img src={card.imgLink} alt={card.name} />
              <div className="name">{card.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="message">
          <h2>{endMessage}</h2>
          <button onClick={onPlayAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Cards;
