import React from "react";
import { useState } from "react";
const Jokes = () => {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  const fetchJoke = async () => {
    try {
      const response = await fetch("http://localhost:3000/jokes");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setJoke(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching joke:", error.message);
    }
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
