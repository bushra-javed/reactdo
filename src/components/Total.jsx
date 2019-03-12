import React from "react";

function Total(props) {
  console.log(props.total.likecount);
  return <h1>hello{props.total.likecount + props.total.dislikecount}</h1>;
}

export default Total;
