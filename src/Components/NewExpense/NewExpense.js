
import React,{useState} from 'react'
import ExpenceForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing,setEditing]= useState(false)

    const saveExpenseDateHandler=(enteredExpenseData)=>{
const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
}
props.onAddExpense(expenseData);
setEditing(false)
    }

  

    const startEditingHandler = ()=>{
        setEditing(true)
    } 
    const stopEditingHandler = ()=>{
        setEditing(false)
    } 
return <div className='new-expense'>
   {!isEditing && <button type='button' onClick={startEditingHandler}>Add New Expense </button>}
   {isEditing && <ExpenceForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditingHandler}/>}
</div>
}
 export default NewExpense;