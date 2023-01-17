import React, {useState} from 'react'
import './ExpenseForm.css'

export default function ExpenceForm() {

  const [enteredTitle,setEnteredTitle] = useState('')
  const [enteredAmount,setEnteredAmount] = useState('')
  const [enteredPrice,setEnteredPrice] = useState('')

    const titleChangeHandler=(event)=>{
      setEnteredTitle(event.target.value)
}

const amountChangeHandler=(event)=>{
  setEnteredAmount(event.target.value)
  }

  const dateChangeHandler=(event)=>{
    setEnteredPrice(event.target.value)
    }


  return (
   <form >
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
      <label >Expense title:</label>
      <input type='text' id="title" name="title" onChange={titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
      <label >Expense Amount:</label>
      <input type='number' id="amount" name="amount" onChange={amountChangeHandler}/>
      </div>
      <div className='new-expense__control'>
      <label >Date:</label>
      <input type='date' id="date" name="date" onChange={dateChangeHandler}/>
      </div>
      </div>
      <div className='new-expense__actions'>
      <button type='submit'>Add Expence</button>
      </div>
    </form>
   
  );
}
