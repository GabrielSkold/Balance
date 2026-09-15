import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionsList = ({ transactions }) => {
  return (
    <>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
export default TransactionsList;
