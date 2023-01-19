import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }
   else if (props.item.length === 1) {
    return (
      <ul>
        <li>
          {props.item.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.amount}
              />
            );
          })}
        </li>
        <li className="expenses-list__fallback">Only single Expense here. Please add more...</li>
      </ul>
    );
  } 
  else {
    return (
      <ul className="expenses-list">
        {props.item.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.amount}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpenseList;
