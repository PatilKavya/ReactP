import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenceForm(props) {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const expenceCreateHandler = (event) => {
    event.preventDefault();
    const expenses = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
   props.onSaveExpenseData(expenses);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // const expenceCreate = (event) => {
  //   event.preventDefault()
  // const object = {title:event.target.title.value,amount:event.target.amount.value,date:event.target.date.value}
  // console.log(object)
  // }

  return (
    <form onSubmit={expenceCreateHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type="submit" >Add Expence</button>
      </div>
    </form>
  );
}
