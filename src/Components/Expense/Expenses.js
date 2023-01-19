import React,{useState}from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from './FilterExpense';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  }))

  console.log(filteredExpenses)
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
       {
     filteredExpenses.map((expense) => {
          return <ExpenseItem
          key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          />
      })
      }
      
    </Card>
  );
};

export default Expenses;
