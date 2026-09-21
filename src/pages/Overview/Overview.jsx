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
      <p>Income: {totalIncome}</p>
      <p>Expenses: {totalExpenses}</p>
      <p>Balance: {balance} </p>
    </>
  );
};
export default Overview;
