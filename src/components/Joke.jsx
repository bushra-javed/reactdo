import React from "react";

function Joke(props) {
  const nums = [1, 2, 3, 4, 5];
  const doubled = nums.map(function(num) {
    return num * 2;
  });
  console.log(doubled);

  const doubled1 = nums.map(num => num * 2);
  console.log(doubled1);
  return (
    <div>
      <h1 style={{ display: props.ques ? "block" : "none" }}>Question</h1>
      <p>{props.ques}</p>
      <h1>answer</h1>

      <p style={{ color: !props.ques && "#4444" }}>Answers:{props.ans}</p>
    </div>
  );
}

export default Joke;
