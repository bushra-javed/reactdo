import React from "react";
import Joke from "./Joke";

function Practice5() {
  return (
    // <div className="flex-wrapper">
    <div>
      <Joke
        q="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis voluptatum expedita cumque adipisci quasi. Eum tempore totam saepe nulla nostru  "
        a="m necessitatibus, cupiditate, ipsam repellat quis voluptas, harum provident minima?"
      />
      <hr />
      <Joke a="m necessitatibus, cupiditate, ipsam repellat quis voluptas, harum provident minima?" />
      <hr />

      <Joke
        q="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis voluptatum expedita cumque adipisci quasi. Eum tempore totam saepe nulla nostru  "
        a="m necessitatibus, cupiditate, ipsam repellat quis voluptas, harum provident minima?"
      />
      <hr />

      <Joke
        q="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis voluptatum expedita cumque adipisci quasi. Eum tempore totam saepe nulla nostru  "
        a="m necessitatibus, cupiditate, ipsam repellat quis voluptas, harum provident minima?"
      />
    </div>
  );
}

export default Practice5;
