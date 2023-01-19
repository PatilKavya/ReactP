import React from 'react'
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {

  const deleteHandler = (event) => {
    const item = event.target.parentElement;
    item.remove();
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails title={props.title} price={props.price} ></ExpenseDetails>
      <button onClick={deleteHandler}>Delete Expence</button>
    </Card>
  );
}

export default ExpenseItem;
