import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExpenseList.module.css";
import { useState } from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  listItems: Expense[];
  onClick: (id: number) => void;
}

const ExpenseList = ({ listItems, onClick }: Props) => {
  if (listItems.length === 0) return null;

  let totalExpense = listItems.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <>
      <div className={styles.tableWrapper}>
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
            {listItems.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount} kr</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onClick(expense.id)}
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
