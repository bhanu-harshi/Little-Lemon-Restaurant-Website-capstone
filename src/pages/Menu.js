import React from "react";
import "./Menu.css"; // We'll create this file for styling

// Import images
import bruschetta from "../Assets/bruschetta.png";
import greekSalad from "../Assets/greek-salad.png";
import hummus from "../Assets/hummus.png";
import stuffedGrapeLeaves from "../Assets/stuffed-grape-leaves.png";
import falafel from "../Assets/falafelpng.png";
import spaghetti from "../Assets/spaghetti.png";
import salmon from "../Assets/salmon.png";
import gyro from "../Assets/gyro.png";
import chickenSouvlaki from "../Assets/chicken-souvlaki.png";
import moussaka from "../Assets/moussaka.png";
import risotto from "../Assets/risotto.png";
import paella from "../Assets/paella.png";
import beefSteak from "../Assets/beef-steak.png";
import shrimpPasta from "../Assets/shrimp-pasta.png";
import tiramisu from "../Assets/tiramisu.png";
import cheesecake from "../Assets/cheesecake.png";
import baklava from "../Assets/baklava.png";
import chocolateMousse from "../Assets/chocolate-mousse.png";
import fruitTart from "../Assets/fruit-tart.png";
import pannaCotta from "../Assets/panna-cotta.png";

// Sample menu data
const menuItems = [
  { category: "Starters", name: "Bruschetta", price: "$6", image: bruschetta },
  { category: "Starters", name: "Greek Salad", price: "$7", image: greekSalad },
  { category: "Starters", name: "Hummus Plate", price: "$5", image: hummus },
  { category: "Starters", name: "Stuffed Grape Leaves", price: "$6", image: stuffedGrapeLeaves },
  { category: "Starters", name: "Falafel", price: "$5", image: falafel },
  { category: "Main Course", name: "Spaghetti Carbonara", price: "$12", image: spaghetti },
  { category: "Main Course", name: "Grilled Salmon", price: "$15", image: salmon },
  { category: "Main Course", name: "Lamb Gyro", price: "$13", image: gyro },
  { category: "Main Course", name: "Chicken Souvlaki", price: "$12", image: chickenSouvlaki },
  { category: "Main Course", name: "Moussaka", price: "$14", image: moussaka },
  { category: "Main Course", name: "Vegetable Risotto", price: "$11", image: risotto },
  { category: "Main Course", name: "Seafood Paella", price: "$16", image: paella },
  { category: "Main Course", name: "Beef Steak", price: "$18", image: beefSteak },
  { category: "Main Course", name: "Shrimp Pasta", price: "$15", image: shrimpPasta },
  { category: "Desserts", name: "Tiramisu", price: "$6", image: tiramisu },
  { category: "Desserts", name: "Lemon Cheesecake", price: "$6", image: cheesecake },
  { category: "Desserts", name: "Baklava", price: "$5", image: baklava },
  { category: "Desserts", name: "Chocolate Mousse", price: "$6", image: chocolateMousse },
  { category: "Desserts", name: "Fruit Tart", price: "$5", image: fruitTart },
  { category: "Desserts", name: "Panna Cotta", price: "$6", image: pannaCotta }
];

function Menu() {
  const categories = ["Starters", "Main Course", "Desserts"];

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      {categories.map((cat) => (
        <div key={cat} className="menu-category">
          <h3>{cat}</h3>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === cat)
              .map((item, index) => (
                <div key={index} className="menu-item">
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Menu;

