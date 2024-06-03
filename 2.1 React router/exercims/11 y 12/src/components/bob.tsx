import React, { useState } from 'react';

const Bob: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const getResponse = (message: string): string => {
    if (!message.trim()) {
      return "Fine. Be that way!";
    }

    const isQuestion = message.trim().endsWith('?');
    const isYelling = message === message.toUpperCase() && message !== message.toLowerCase();

    if (isQuestion && isYelling) {
      return "Calm down, I know what I'm doing!";
    } else if (isQuestion) {
      return "Sure.";
    } else if (isYelling) {
      return "Whoa, chill out!";
    }

    return "Whatever.";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(getResponse(input));
  };

  return (
    <div>
      <h1> Bob</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="Say something to Bob" />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default Bob;
