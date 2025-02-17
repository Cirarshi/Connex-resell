import React from "react";

export function Products({ productObj }) {
  return (
    <li className={`product ${productObj.qnty < 1 ? "sold-out" : ""}`}>
      <img
        className="pics"
        src={productObj.photoName}
        alt={productObj.name}
      ></img>
      <div>
        <h3>{productObj.name}</h3>
        <p>{productObj.desc}</p>

        {productObj.qnty < 1 ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{productObj.price}₹</span>
        )}
      </div>
    </li>
  );
}
