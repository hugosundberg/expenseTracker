import "./App.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <div>EXPENSE TRACKER</div>
      <Form></Form>
      <ExpenseList />
    </>
  );
}

export default App;
