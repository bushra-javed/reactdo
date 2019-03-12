import React from "react";
import ContactCard from "./ContactCard";

function Practice4() {
  return (
    <div className="flex-wrapper">
      <ContactCard
        contact={{
          name: "bushra ali",
          imgURL: "http://placekitten.com/300/200",
          phone: "200-22212-222",
          email: "bush@gmail.com"
        }}
      />
      <ContactCard
        contact={{
          name: "bushra zafar",
          imgURL: "http://placekitten.com/300/200",
          phone: "200-22212-222",
          email: "bush@gmail.com"
        }}
      />
      <ContactCard
        contact={{
          name: "jherry zafar",
          imgURL: "http://placekitten.com/300/200",
          phone: "200-212-222",
          email: "bush@gmail.com"
        }}
      />
    </div>
  );
}

export default Practice4;
