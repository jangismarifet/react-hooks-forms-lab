import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;

    return (item.category === selectedCategory && item.name.includes(search));
  });

  function onItemFormSubmit(newItem) {
    setItems([...items,newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems} onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} setSearch={setSearch} onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
