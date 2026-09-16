import { useState } from "react";

const TransactionsForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (description.trim() === "") {
      newErrors.description = "Please enter a description.";
    }
    if (amount.trim() === "" || Number(amount) <= 0) {
      newErrors.amount = "Please enter an amount.";
    }
    if (date.trim() === "") {
      newErrors.date = "Please assign a date to transaction.";
    }
    if (category.trim() === "") {
      newErrors.category = "Assign category for transaction.";
    }
    setErrors(newErrors);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          value={description}
          id="description"
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && <p role="alert">{errors.description}</p>}
        <label htmlFor="amount">Amount</label>
        <input
          value={amount}
          id="amount"
          type="number"
          onChange={(event) => setAmount(event.target.value)}
        />
        {errors.amount && <p role="alert">{errors.amount}</p>}
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        {errors.date && <p role="alert">{errors.date}</p>}
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select category</option>
          <option value="salary">Salary</option>
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="transportation">Transportation</option>
          <option value="other">Other</option>
        </select>
        {errors.category && <p role="alert">{errors.category}</p>}

        <button type="submit">Add transaction</button>
      </form>
    </>
  );
};
export default TransactionsForm;
