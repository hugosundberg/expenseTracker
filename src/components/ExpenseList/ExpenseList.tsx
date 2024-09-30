import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExpenseList.module.css";

interface Expense {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  listItems: Expense[];
  onClick: (index: number) => void;
}

const ExpenseList = ({ listItems, onClick }: Props) => {
  let totalExpense = listItems.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  function filterExpensesByCategory() {
    console.log("change");
  }

  return (
    <>
      <div className={styles.tableWrapper}>
        <div className="mb-3">
          <select
            id="category"
            onChange={filterExpensesByCategory}
            className="form-select"
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
                    className="btn btn-danger"
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
