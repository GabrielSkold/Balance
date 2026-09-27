const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <li className="transaction-item">
      <div className="transaction-details">
        <p>{transaction.description}</p>
        <p>Date: {transaction.date}</p>
      </div>
      <p className={`transaction-amount ${transaction.type}`}>
        {transaction.type === "expense" ? "-" : "+"}
        {transaction.amount}
      </p>
      {deleteTransaction && (
        <button onClick={() => deleteTransaction(transaction.id)}>X</button>
      )}
    </li>
  );
};
export default TransactionItem;
