import React, { useState, useEffect } from "react";
import axios from "axios";
// import  "../style/style.css";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [category, setCategory] = useState(" ");

  const handleAddItem = () => {
    axios
      .post("http://localhost:3001/menu/add-item", {
        name: name,
        description: description,
        price: price,
        category: category,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div >
        
      <div className="text-bolder ">Name:{" "}</div>
      <input
      
        type="text"
        placeholder="Enter  item Name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Description:{" "}
      <input
        type="text"
        
        placeholder="Enter Description "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      Price:{" "}
      <input
        type="text"
        placeholder="Enter Price "
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      Category:{" "}
      <input
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button  type="submit" onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
