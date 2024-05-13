import React, { useState } from 'react';

const getBandNumber = (color: string) => {
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

// Define component to display resistance bands and their values
const ResistorBands: React.FC = () => {
    const [color, setColor] = useState<string>('Black');

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;
        setColor(newColor);
    };

    const number = getBandNumber(color);

    return (
        <div>
            <h2>Resistance Band Number</h2>
            <input type="text" value={color} onChange={handleColorChange} />
            {number !== null && <p>Number: {number}</p>}
        </div>
    );
};

// Render the component
const App: React.FC = () => {
    return (
        <div>
            <h1>Resistor Band Number Lookup</h1>
            <ResistorBands />
        </div>
    );
};

export default App;
