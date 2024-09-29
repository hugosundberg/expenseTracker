import styles from "./ExpenseList.module.css";

const ExpenseList = () => {
  const expenses = [
    { description: "Bananas", amount: 10, category: "Grocieries" },
    { description: "Apples", amount: 8, category: "Grocieries" },
    { description: "Movie", amount: 14, category: "Entertainment" },
    { description: "Netflix", amount: 12, category: "Entertainment" },
    { description: "Rent", amount: 800, category: "Bills" },
  ];

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.description}>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
