const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <li>
      {transaction.type === "expense" ? "-" : "+"}
      {transaction.amount}
      <p>{transaction.description}</p>
      <p>Date: {transaction.date}</p>
      {deleteTransaction && (
        <button onClick={() => deleteTransaction(transaction.id)}>X</button>
      )}
    </li>
  );
};
export default TransactionItem;
