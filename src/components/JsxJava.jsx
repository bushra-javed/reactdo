import React from "react";
import ReactDOM from "react-dom";

function JsxJava() {
  const firstname = "bushra";
  const lastname = "zafar";
  const styles = {
    // color: "#333",
    padding: "20px",
    fontSize: "40px"
  };

  styles.backgroundColor = "#333";
  styles.color = "blue";
  styles.color = "blue";
  const date = new Date();
  const hours = date.getHours();
  let timeofday;
  if (hours < 12) {
    timeofday = "good morning";
    styles.color = "yellow";
  } else if (hours >= 12) {
    timeofday = "good evening";
    styles.color = "orange";
  }

  return (
    <div>
      <h1 style={styles}>{firstname + "   " + lastname + "   " + timeofday}</h1>
      <h2>{firstname + "   " + lastname + "   " + timeofday}</h2>
    </div>
  );
}

export default JsxJava;
