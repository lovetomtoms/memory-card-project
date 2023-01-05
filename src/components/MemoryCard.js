import React, { useState } from "react";
import Card from "./Card";
import shuffleEmojies from "./shuffleEmojies";
import emojiData from "../emojiData";

export default function MemoryCard() {
  const [gameBoard, setGameBoard] = useState(() => shuffleEmojies(emojiData));
  const [score, setScore] = useState([]);
  const [bestScore, setBestScore] = useState(score.length);

  function handleChange(id) {
    setGameBoard((prevBoard) => shuffleEmojies(prevBoard));
    handleScore(id);
  }

  function handleScore(id) {
    const sameID = score.some((emojID) => emojID === id);
    if (!sameID) {
      setScore((prevScore) => [...prevScore, id]);
    } else {
      setScore([]);
    }
  }

  if (score.length > bestScore) {
    setBestScore(score.length);
  }

  return (
    <div>
      <h3>Score: {score.length}</h3>
      <h3>Best Score: {bestScore}</h3>
      <div className="container">
        {gameBoard.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            img={card.img}
            handleChange={() => handleChange(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
