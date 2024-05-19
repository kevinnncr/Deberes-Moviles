import React, { useState } from 'react';

const Pangram: React.FC = () => {
    const [inputSentence, setInputSentence] = useState('');
    const [isPangram, setIsPangram] = useState(false);

    const checkPangram = (sentence: string) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const letters = sentence.toLowerCase().replace(/[^a-z]/g, '');

        for (const letter of alphabet) {
            if (!letters.includes(letter)) {
                return false;
            }
        }

        return true;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSentence(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsPangram(checkPangram(inputSentence));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Pangram</h1>
                <label>
                   
                    <input type="text" value={inputSentence} onChange={handleChange} />
                </label>
                <button type="submit">Check </button>
            </form>
            {isPangram ? (
                <p>The sentence is a pangram!</p>
            ) : (
                <p>The sentence is not a pangram.</p>
            )}
        </div>
    );
};

export default Pangram;
