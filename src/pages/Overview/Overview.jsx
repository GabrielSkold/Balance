import SummaryCard from "../../components/SummaryCard/SummaryCard";

const Overview = ({ transactions }) => {
  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income",
  );
  const totalIncome = incomeTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense",
  );
  const totalExpenses = expenseTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  const balance = totalIncome - totalExpenses;

  return (
    <>
      <h1>Overview</h1>
      <SummaryCard label={"Income"} amount={totalIncome} />
      <SummaryCard label={"expense"} amount={totalExpenses} />
      <SummaryCard label={"Balance"} amount={balance} />
    </>
  );
};
export default Overview;
