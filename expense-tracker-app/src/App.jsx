import { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const totalExpense = expenses.reduce((total, item) => total + item.amount, 0);

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1> 💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className="total"> Total Expense : ${totalExpense.toFixed(2)}</h3>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
