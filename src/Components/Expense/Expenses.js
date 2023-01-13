import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css' 
import React from "react";

const Expenses = (props) => {
      const deleteHandler = (e) =>{
            const item=e.target.parentElement
           item.remove();
        
      }
    return  (
    <Card className="expenses">
         <ExpenseItem datee={props.date}
            titlee={props.title}
            pricee={props.price}></ExpenseItem>
            <button onClick={deleteHandler}>Delete Expence</button>
      </Card>
      )
}

export default Expenses;