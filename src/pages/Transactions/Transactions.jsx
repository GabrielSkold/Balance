import { useState } from "react";
import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import TransactionsFilter from "../../components/TransactionFilters/TransactionFilters";

const Transactions = ({ transactions, addTransaction, deleteTransaction }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);
  const [appliedDateFilter, setAppliedDateFilter] = useState({
    month: "",
    date: "",
  });

  const [typeFilter, setTypeFilter] = useState("all");
  const filteredTransactions = transactions.filter(
    (transaction) =>
      (typeFilter === "all" || transaction.type === typeFilter) &&
      (appliedDateFilter.date === "" ||
        transaction.date === appliedDateFilter.date) &&
      (appliedDateFilter.month === "" ||
        transaction.date.startsWith(appliedDateFilter.month)),
  );
  const dateFilterLabel =
    appliedDateFilter.date || appliedDateFilter.month || "Filter by date";
  return (
    <>
      <h1>Transactions</h1>
      <TransactionsForm addTransaction={addTransaction} />
      <TransactionsFilter
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <button
        type="button"
        onClick={() => setIsDateFilterOpen(!isDateFilterOpen)}
      >
        {dateFilterLabel}
      </button>
      {isDateFilterOpen && (
        <div>
          <label htmlFor="filter-month">Month</label>
          <input
            type="month"
            id="filter-month"
            value={selectedMonth}
            onChange={(event) => {
              setSelectedMonth(event.target.value);
              setSelectedDate("");
            }}
          />

          <label htmlFor="filter-date">Exact date (optional)</label>
          <input
            type="date"
            id="filter-date"
            value={selectedDate}
            onChange={(event) => {
              setSelectedDate(event.target.value);
              setSelectedMonth(event.target.value.slice(0, 7));
            }}
          />
          <button
            type="button"
            onClick={() => {
              setSelectedDate("");
              setSelectedMonth("");
              setAppliedDateFilter({ month: "", date: "" });
              setIsDateFilterOpen(false);
            }}
          >
            All dates
          </button>
          <button
            type="button"
            onClick={() => {
              setAppliedDateFilter({
                month: selectedMonth,
                date: selectedDate,
              });
              setIsDateFilterOpen(false);
            }}
          >
            Apply
          </button>
        </div>
      )}
      <TransactionsList
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
      />
    </>
  );
};
export default Transactions;
