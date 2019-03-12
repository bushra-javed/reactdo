import React from "react";
import Products from "./Products";
import prodarray from "./vschoolProducts";

function Practice7() {
  console.log("products:", prodarray);
  // const newproduct = prodarray.map(prod => (
  //   <Products
  //     key={prod.id}
  //     name={prod.name}
  //     price={prod.price}
  //     description={prod.description}
  //   />
  // ));

  const newproduct = prodarray.map(item => (
    <Products key={item.id} productsinprops={item} />
  ));
  return <div className="flex-wrapper">{newproduct}</div>;
}

export default Practice7;

