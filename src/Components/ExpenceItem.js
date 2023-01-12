import './ExpenceItem.css'

function ExpenseItem(){
    return (
    <div className="expense-item">
        <div>23rd March 2023</div>
        <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">2000</div>
        </div>
    </div>);
}

export default ExpenseItem;