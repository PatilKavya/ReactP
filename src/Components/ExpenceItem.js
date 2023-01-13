import ExpenseDate from "./ExpenceDate";
import ExpenceDetails from "./ExpenceDetails";
import "./ExpenceItem.css";


function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenceDetails title={props.title} price={props.price} ></ExpenceDetails>
    </div>
  );
}

export default ExpenseItem;
