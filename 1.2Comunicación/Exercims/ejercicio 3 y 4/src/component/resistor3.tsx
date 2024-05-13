import { useState } from "react";

const ColorNumber3 = () => {
  const [color1, setColor1] = useState<string>('');
  const [color2, setColor2] = useState<string>('');
  const [color3, setColor3] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const getColor = (color: string): number | null => {
    switch (color.toLowerCase()) {
      case 'black':
        return 0;
      case 'brown':
        return 1;
      case 'red':
        return 2;
      case 'orange':
        return 3;
      case 'yellow':
        return 4;
      case 'green':
        return 5;
      case 'blue':
        return 6;
      case 'violet':
        return 7;
      case 'grey':
        return 8;
      case 'white':
        return 9;
      default:
        return null;
    }
  };

  const calculateResult = () => {
    const value1 = getColor(color1);
    const value2 = getColor(color2);
    const value3 = getColor(color3);

    if (value1 !== null && value2 !== null) {
      const zeros = value3 !== null ? value3 : 0;
      setResult((value1 * 10 + value2) * Math.pow(10,  zeros));
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <h2>Resistor Value </h2>
      <div>
        <>Color 1: </>
        <input  value={color1} onChange={(e) => setColor1(e.target.value)} />
      </div>
      <div>
        <>Color 2: </>
        <input  value={color2} onChange={(e) => setColor2(e.target.value)} />
      </div>
      <div>
        <>Color 3: </>
        <input  value={color3} onChange={(e) => setColor3(e.target.value)} />
      </div>
      <button onClick={calculateResult}>Calculate</button>
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>{result} ohmios</p>
        </div>

      )}
    </div>
  );
};

export default ColorNumber3;
