import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExpenseList.module.css";
import { useState } from "react";

interface Expense {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  listItems: Expense[];
  onClick: (index: number) => void;
  onFilter: (category: string) => void;
}

const ExpenseList = ({ listItems, onClick, onFilter }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  let totalExpense = listItems.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <>
      <div className={styles.tableWrapper}>
        <div className="mb-3">
          <select
            id="category"
            onChange={handleCategoryChange}
            className="form-select"
            value={selectedCategory}
          >
            <option value="All Categories">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
          </select>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {listItems.map((expense, index) => (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>{expense.amount} kr</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onClick(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <td>{totalExpense} kr</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
