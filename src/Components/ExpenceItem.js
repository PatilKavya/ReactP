import "./ExpenceItem.css";

function ExpenseItem() {
    const date=new Date(2022,2,28);
    const title='Car Insurence';
    const price=2000
  return (
    <div className="expense-item">
      <div>{date.toString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
