import React,{useState} from 'react'
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from './Components/Expense/FilterExpense';

function App() { 
  const initialList = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]

 const [expenses,setArr] = useState(initialList);

  const addExpenseHandler = (expense)=>{
   setArr((prevExpenses)=>{
   return [expense,...prevExpenses];
  })
}
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
 
  return (
    <div>
      <h2> Let's get Started! </h2>

      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      
      {
      expenses.map((expense) => {
          return <Expenses
          key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          />
      })
      }
    </div>
  );
}

export default App;
