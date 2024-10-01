import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

interface FormData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onAdd: (data: FormData) => void;
}

const Form = ({ onAdd }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onAdd(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className="form-floating mb-3">
        <input
          {...register("description", { required: true })}
          id="description"
          type="text"
          className="form-control"
          placeholder="Description"
        />
        <label htmlFor="description">Description</label>
      </div>

      <div className="form-floating mb-3">
        <input
          {...register("amount", { required: true, valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
          placeholder="Amount"
        />
        <label htmlFor="amount">Amount</label>
      </div>

      <div className="form-floating mb-3">
        <select {...register("category")} id="category" className="form-select">
          <option value="Groceries">Groceries</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
        </select>
        <label htmlFor="category">Category</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
