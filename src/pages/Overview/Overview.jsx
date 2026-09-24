import { useState } from "react";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const Overview = ({ transactions }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const filteredTransactions = transactions.filter(
    (transaction) =>
      selectedMonth === "" || transaction.date.startsWith(selectedMonth),
  );
  const incomeTransactions = filteredTransactions.filter(
    (transaction) => transaction.type === "income",
  );
  const totalIncome = incomeTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  const expenseTransactions = filteredTransactions.filter(
    (transaction) => transaction.type === "expense",
  );
  const totalExpenses = expenseTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  const balance = totalIncome - totalExpenses;

  const recentTransactions = [...filteredTransactions]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <>
      <h1>Overview</h1>
      <label htmlFor="filter-month">Filter by month</label>
      <input
        type="month"
        id="filter-month"
        value={selectedMonth}
        onChange={(event) => setSelectedMonth(event.target.value)}
      />
      <SummaryCard label={"Income"} amount={totalIncome} />
      <SummaryCard label={"expense"} amount={totalExpenses} />
      <SummaryCard label={"Balance"} amount={balance} />
      <h2>Recent transactions</h2>
      <TransactionsList transactions={recentTransactions} />
      <CurrencyConverter />
    </>
  );
};
export default Overview;
