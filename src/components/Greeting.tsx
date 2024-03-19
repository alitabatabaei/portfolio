import { useState } from 'react';

export default function Greeting({ messages }: { messages: string[] }) {
  const [idx, setIdx] = useState(randomIdx(messages.length));

  const setRandomMessage = () => setIdx(randomIdx(messages.length));

  return (
    <div>
      <h3>
        ({idx}) {messages[idx]}! Thank you for visiting
      </h3>
      <button onClick={setRandomMessage}>New Greeting</button>
    </div>
  );
}

const randomIdx = (max: number) => Math.floor(Math.random() * max);
// const randomMessage = (messages: string[]) => messages[randomIdx(messages.length)];
