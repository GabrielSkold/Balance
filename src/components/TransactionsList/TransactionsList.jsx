import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionsList = ({ transactions, deleteTransaction }) => {
  const nothingToDisplay = transactions.length === 0;
  if (nothingToDisplay) {
    return <p>No transactions to display.</p>;
  }
  return (
    <>
      <ul className="transactions-list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};
export default TransactionsList;
