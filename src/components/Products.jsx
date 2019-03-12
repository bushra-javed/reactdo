import React from "react";

function Products(props) {
  console.log("props is", props.productsinprops.name);
  return (
    <div class="flex-item">
      <h1>name is {props.productsinprops.name}</h1>
      <h1>price: {props.productsinprops.price}</h1>
      <h1>description:{props.productsinprops.description}</h1>
    </div>
  );
}

export default Products;
