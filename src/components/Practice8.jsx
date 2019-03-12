import React, { Component } from "react";

// function FuntionalC() {
//   return <h1>function component</h1>;
// }
// export default FuntionalC;

class Practice8 extends React.Component {
  MyStyle() {
    return { color: "blue" };
    // <div>
    //   <h1>im in class method</h1>
    // </div>
  }
  MyMethod() {
    return (
      <div>
        <h1>im in class method</h1>
      </div>
    );
  }

  render() {
    const Stylereturn = this.MyStyle();
    const Elementreturn = this.MyMethod();
    return (
      <div>
        {Elementreturn}
        <h1 style={Stylereturn}>i m class component</h1>
      </div>
    );
  }
}
export default Practice8;
