const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <li>
      {transaction.description} {transaction.amount}
      <button onClick={() => deleteTransaction(transaction.id)}>X</button>
    </li>
  );
};
export default TransactionItem;
