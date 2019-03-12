import React from "react";
import Total from "./Total";
function ChildComponent(props) {
  console.log(props.count1.likecount);
  return (
    <div>
      <h1>
        passed in Separete functional component for like ={" "}
        {props.count1.likecount}
      </h1>
      <h1>
        Passed to separete functional component for dislike=
        {props.count1.dislikecount}
      </h1>

      <Total total={props.count1} />
    </div>
  );
}

export default ChildComponent;
