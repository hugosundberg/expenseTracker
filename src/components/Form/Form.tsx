import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Form.module.css";
import categories from "../../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(0),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

interface FormData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onAdd: (data: FormData) => void;
}

const Form = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

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
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
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
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="form-floating mb-3">
        <select {...register("category")} id="category" className="form-select">
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <label htmlFor="category">Category</label>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
