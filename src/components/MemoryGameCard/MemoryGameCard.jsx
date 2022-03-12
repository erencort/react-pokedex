import React from "react";
import "./style.css";

function MemoryGameCard({ item, handleChoice, disabled, flipped }) {
  const onClick = () => {
    if (!disabled) {
      handleChoice(item);
    }
  };
  return (
    <div className="card">
      <div className="card-images">
        {flipped === "yes" ? (
          <img className="card-front-img" src={item.src} alt="card-front" />
        ) : (
          <img
            onClick={onClick}
            className="card-back-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"
            alt="card-back"
          />
        )}
      </div>
    </div>
  );
}

export default MemoryGameCard;
