import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionsList = ({ transactions, deleteTransaction }) => {
  return (
    <>
      <ul>
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
