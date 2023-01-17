import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css' 


const Expenses = (props) => {

      const deleteHandler = (event) =>{
            const item=event.target.parentElement
           item.remove();
        
      }
      
    return (
    <Card className="expenses">
         <ExpenseItem date={props.date}
            title={props.title}
            price={props.price}></ExpenseItem>
            <button onClick={deleteHandler}>Delete Expence</button>
      </Card>
      );
}

export default Expenses;