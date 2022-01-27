import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div>
        <h2 className="expense-item__description">Title</h2>
      </div>
      <div className="expense-item__price">Amount</div>
    </div>
  );
}

export default ExpenseItem;
