import React from 'react'
import './ExpenseForm.css'

export default function ExpenceForm() {

    const addingEvent=(event)=>{
        
console.log(event.target.value)

}

  return (
   <form onChange={addingEvent}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
      <label >Expense title:</label>
      <input type='text' id="title" name="title" />
      </div>
      <div className='new-expense__control'>
      <label >Expense Amount:</label>
      <input type='number' id="amount" name="amount" />
      </div>
      <div className='new-expense__control'>
      <label >Date:</label>
      <input type='date' id="date" name="date" />
      </div>
      </div>
      <div className='new-expense__actions'>
      <button type='submit'>Add Expence</button>
      </div>
    </form>
   
  );
}
