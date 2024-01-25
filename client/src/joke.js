import React from "react";
import { useState } from "react";
const Jokes = () => {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  const fetchJoke = async () => {
    const response = await fetch("http://localhost:3000/jokes");
    const data = await response.json();
    setJoke(data);
    console.log(data);
  };
  return (
    <>
      <h1>{joke.setup}</h1>
      <h1>{joke.delivery}</h1>
      <button onClick={fetchJoke}>Press for Joke</button>
    </>
  );
};
export default Jokes;
