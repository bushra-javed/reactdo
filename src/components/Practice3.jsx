import React from "react";
import ContactCard from "./ContactCard";

function Practice3() {
  return (
    <div className="flex-wrapper">
      <ContactCard
        name="bushra zafar"
        imgURL="http://placekitten.com/300/200"
        phone="200-212-33222"
        email="bush@gmail.com"
      />
      <ContactCard
        name="ali zafar"
        imgURL="http://placekitten.com/300/200"
        phone="200-212-33222"
        email="bush@gmail.com"
      />
      <ContactCard
        name="jherr ali"
        imgURL="http://placekitten.com/300/200"
        phone="200-212-222"
        email="bush@gmail.com"
      />
      <ContactCard
        name="junaid"
        imgURL="http://placekitten.com/300/200"
        phone="200-212-222"
        email="bush@gmail.com"
      />
    </div>
  );
}

export default Practice3;
