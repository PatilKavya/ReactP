import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css' 

const Expenses = (props) => {
    return  (
    <Card className="expenses">
         <ExpenseItem  datee={props.date}
            titlee={props.title}
            pricee={props.price}></ExpenseItem>
      </Card>
      )
}

export default Expenses;