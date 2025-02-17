import React from "react";
import { productsData } from ".";
import { Products } from "./Products";

export function Menu() {
  const products = productsData;
  const numProducts = products.length;
  return (
    <main className="menu">
      <h2>Our Products</h2>

      {numProducts > 0 ? (
        <>
          <p>
            We are serving you the used products, but those looks same as new
            with original packaging to give you like a new unboxing experience.
          </p>

          <ul className="products">
            {products.map((product) => (
              <Products productObj={product} key={product.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Sorry, No products anymore. But wait, will get something soon for you
          !
        </p>
      )}
      {/*<Products
              name="Zebronics Soundbar"
              desc="Description"
              pic="products/zebbar.jpg"
              price={6000}
            />
            <Products />
            <Products />
            <Products />*/}
    </main>
  );
}
