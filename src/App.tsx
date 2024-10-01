import { useState } from "react";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Form from "./components/Form/Form";
import styles from "./App.module.css";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    // Test data
    { id: 1, description: "Bananas", amount: 10, category: "Groceries" },
    { id: 2, description: "Apples", amount: 8, category: "Groceries" },
    { id: 3, description: "Movie", amount: 14, category: "Entertainment" },
    { id: 4, description: "Netflix", amount: 12, category: "Entertainment" },
    { id: 5, description: "Rent", amount: 800, category: "Bills" },
    { id: 6, description: "Milk", amount: 2, category: "Groceries" },
    { id: 7, description: "Uber", amount: 12, category: "Transportation" },
  ]);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  function addExpense(newExpense: any) {
    const nextId = Math.max(...expenses.map((e) => e.id)) + 1;
    const expenseWithId = { ...newExpense, id: nextId };
    const updatedExpenses = [...expenses, expenseWithId];

    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
  }

  function handleRemove(id: number) {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    console.log(id);

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
      <div className={styles.bodyWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.title}>EXPENSE TRACKER</div>
          <Form onAdd={addExpense}></Form>
          <ExpenseFilter
            onSelectCategory={(category) => filterExpensesByCategory(category)}
          />
          <ExpenseList listItems={filteredExpenses} onClick={handleRemove} />
        </div>
      </div>
    </>
  );
}

export default App;
