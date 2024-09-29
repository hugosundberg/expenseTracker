import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Form from "./components/Form/Form";

function App() {
  const [expenses, setExpenses] = useState([
    { description: "Bananas", amount: 10, category: "Grocieries" },
    { description: "Apples", amount: 8, category: "Grocieries" },
    { description: "Movie", amount: 14, category: "Entertainment" },
    { description: "Netflix", amount: 12, category: "Entertainment" },
    { description: "Rent", amount: 800, category: "Bills" },
  ]);

  function handleRemove(index: number) {
    // Filter out the item with the matching index
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  }

  return (
    <>
      <div>EXPENSE TRACKER</div>
      <Form></Form>
      <ExpenseList listItems={expenses} onClick={handleRemove} />
    </>
  );
}

export default App;
