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
          {listItems.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => onClick(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
