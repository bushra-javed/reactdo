import React from "react";
import ChildComponent from "./ChildComponent";
class Practice9 extends React.Component {
  // practice for passing props to child and from child to anther child
  constructor() {
    super();
    this.state = {
      username: "bushra",
      likecount: 0,
      dislikecount: 0
    };

    this.handleClicklike = this.handleClicklike.bind(this);
    this.handleClickdislike = this.handleClickdislike.bind(this);
  }
  handleClicklike() {
    // this.setState(prevstate => {
    //   return {
    //     username: "ali",
    //     count: prevstate.count + 1
    //   };
    // });
    //es2005 verseion
    this.setState(function(prevState) {
      return { likecount: prevState.likecount + 1 };
    });
  }
  handleClickdislike() {
    // this.setState(prevstate => {
    //   return {
    //     username: "ali",
    //     count: prevstate.count + 1
    //   };
    // });
    // console.log(this.state.dislikecount);
    this.setState(function(prevState) {
      return { dislikecount: prevState.dislikecount + 1 };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <h1>dislike{this.state.dislikecount}</h1>
        <h1>like{this.state.likecount}</h1>
        <h1>
          total like and dislike
          {this.state.likecount + this.state.dislikecount}
        </h1>
        <br />

        <button onClick={this.handleClicklike}>like it</button>
        <br />
        <button onClick={this.handleClickdislike}>dislike it</button>
        <br />
        <ChildComponent count1={this.state} />
        {/* if to send one propertu  */}
        {/* <ChildComponent count1={this.state.likecount} /> */}
      </div>
    );
  }
}
export default Practice9;
