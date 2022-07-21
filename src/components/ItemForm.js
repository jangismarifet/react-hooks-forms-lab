import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({});
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(newItem);
  }
  function handleItemName(event) {
    setItemName(event.target.value)
  }

  function handleCategory(event) {
    setItemCategory(event.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
