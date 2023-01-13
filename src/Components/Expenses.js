import ExpenseItem from "./ExpenseItem";
import Card from './Card'
import './Expenses.css' 

function Expenses(props){
    return  (
    <Card className="expenses">
         <ExpenseItem  datee={props.date}
            titlee={props.title}
            pricee={props.price}></ExpenseItem>
      </Card>
      )
}

export default Expenses;