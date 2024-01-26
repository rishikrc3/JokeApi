import React from "react";
import { useState } from "react";
const Jokes = () => {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  const fetchJoke = async (category) => {
    try {
      const response = await fetch("http://localhost:3000/jokes/" + category);
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
      <button onClick={() => fetchJoke("dark")}>Dark Jokes</button>
      <button onClick={() => fetchJoke("")}></button>
    </>
  );
};
export default Jokes;
