import './ExpenceItem.css'

function ExpenceDetails(props){
    return (<div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__price">{props.price}</div>
  </div>);
}

export default ExpenceDetails;