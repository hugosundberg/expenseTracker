import { useForm } from "react-hook-form";

interface Props {}

const Form = ({}: Props) => {
  const { register } = useForm();

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default Form;
