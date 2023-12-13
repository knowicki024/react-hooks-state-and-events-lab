import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to filter items based on the selected category
  const getFilteredItems = () => {
    if (selectedCategory === "All") {
      return items; // If "All" is selected, display all items
    } else {
      return items.filter((item) => item.category === selectedCategory);
    }
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

