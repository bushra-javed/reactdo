import React from "react";
import Joke from "./Joke";
import JokeData from "./JokeData";

function Practice6() {
  const JokeComponent = JokeData.map(joke => (
    <Joke key={joke.id} ques={joke.question} ans={joke.answer} />
    // <Joke key={joke.id} dataprops={joke} />
  ));
  return (
    // <div className="flex-wrapper">
    <div>{JokeComponent}</div>
  );
}

export default Practice6;
