
function ExpenseItem({ item, onDelete }) {
  return (
    <div className="expense-item">
      <span>{item.title}</span>
      <span>${item.amount.toFixed(2)}</span>
      <button onClick={onDelete}>❌</button>
    </div>
  );
}

export default ExpenseItem;
