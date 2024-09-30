import { useState } from "react";
import "./App.css";
import "./index.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Form from "./components/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [expenses, setExpenses] = useState([
    // Test data
    { description: "Bananas", amount: 10, category: "Groceries" },
    { description: "Apples", amount: 8, category: "Groceries" },
    { description: "Movie", amount: 14, category: "Entertainment" },
    { description: "Netflix", amount: 12, category: "Entertainment" },
    { description: "Rent", amount: 800, category: "Bills" },
    { description: "Milk", amount: 2, category: "Groceries" },
    { description: "Uber", amount: 12, category: "Transportation" },
  ]);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  function addExpense(newExpense: any) {
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
  }

  function handleRemove(index: number) {
    // Filter out the item with the matching index
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
  }

  function filterExpensesByCategory(category: string) {
    if (category === "All Categories") {
      setFilteredExpenses(expenses); // Show all expenses
    } else {
      const filtered = expenses.filter(
        (expense) => expense.category === category
      );
      setFilteredExpenses(filtered);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="title">EXPENSE TRACKER</div>
        <Form onAdd={addExpense}></Form>
        <ExpenseList
          listItems={filteredExpenses}
          onClick={handleRemove}
          onFilter={filterExpensesByCategory}
        />
      </div>
    </>
  );
}

export default App;
