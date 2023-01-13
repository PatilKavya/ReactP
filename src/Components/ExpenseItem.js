import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.datee}></ExpenseDate>
      <ExpenseDetails title={props.titlee} price={props.pricee} ></ExpenseDetails>
    </Card>
  );
}

export default ExpenseItem;
