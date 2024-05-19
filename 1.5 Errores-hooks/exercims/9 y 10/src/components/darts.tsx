import React, { useState } from 'react';

const calculateScore = (x: number, y: number): number => {
  const distance = Math.sqrt(x * x + y * y);
  if (distance > 10) {
    return 0;
  } else if (distance > 5) {
    return 1;
  } else if (distance > 1) {
    return 5;
  } else {
    return 10;
  }
};

const DartGame: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [score, setScore] = useState<number | null>(null);

  const handleCalculate = () => {
    const newScore = calculateScore(x, y);
    setScore(newScore);
  };

  return (
    <div>
      <h1>Juego de Dardos</h1>
      <div>
        <label>
          Coordenada X:
          <input
            type="number"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Coordenada Y:
          <input
            type="number"
            value={y}
            onChange={(e) => setY(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calcular Puntuación</button>
      {score !== null && <p>Puntuación: {score}</p>}
    </div>
  );
};

export default DartGame;
