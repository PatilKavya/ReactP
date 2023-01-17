import React, { useState } from "react";

import "./ExpenseItem.css";

const ExpenseDetails = (props) => {

  const [title, setTitle] = useState(props.title);

  const handler = () => {
    setTitle('updated!')
    console.log(title)
  };

  const [price,setprice] = useState(props.price);
  
const priceChange = () =>{
   setprice(100)
}

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <button onClick={handler}>Change Title</button>
      <div className="expense-item__price">${price}</div>
      <button onClick={priceChange}>Change Price</button>
    </div>
  );
};

export default ExpenseDetails;
