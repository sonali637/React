// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodItem = ["Dal", "Green Vegetable", "Khichdi", "Roti", "Salad"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
