const TransactionsFilter = ({ typeFilter, setTypeFilter }) => {
  return (
    <div className="form-field">
      <label htmlFor="type-filter">Filter by type</label>
      <select
        id="type-filter"
        value={typeFilter}
        onChange={(event) => setTypeFilter(event.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expenses</option>
      </select>
    </div>
  );
};
export default TransactionsFilter;
