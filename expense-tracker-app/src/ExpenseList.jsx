// import { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses added yet.</p>;
  }
  return (
    <div className="expense-list">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
