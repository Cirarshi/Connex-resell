import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const productsData = [
  {
    name: "Zebronics Soundbar",
    desc: "ZEB_JUKE BAR 9400 Pro Dolby 5.1 (525 Watt)",
    price: 6000,
    photoName: "products/zebbar.jpg",
    soldOut: false,
    qnty: 1,
  },
  {
    name: "Sony Headphones",
    desc: "Sony MDR-ZX110AP Headphones",
    price: 600,
    photoName: "products/sonyheadphone.jpg",
    soldOut: false,
    qnty: 1,
  },
  {
    name: "Verity",
    desc: "A classic bestseller edition by Colleen Hoover",
    price: 150,
    photoName: "products/ch_verity.jpg",
    soldOut: false,
    qnty: 1,
  },
  {
    name: "The Boy with a Broken Heart",
    desc: "It's the 2nd book of The Boy Series by Durjoy Datta",
    price: 150,
    photoName: "products/dd_brokenheart.jpg",
    soldOut: false,
    qnty: 1,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
