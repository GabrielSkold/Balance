import formatCurrency from "../../utils/formatCurrency";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedAmount = formatCurrency(transaction.amount);
  const formattedDate = dateFormatter.format(
    new Date(`${transaction.date}T00:00:00`),
  );
  return (
    <li className="transaction-item">
      <div className="transaction-details">
        <p>{transaction.description}</p>
        <p>Date: {formattedDate}</p>
      </div>
      <p className={`transaction-amount ${transaction.type}`}>
        {transaction.type === "expense" ? "-" : "+"}
        {formattedAmount}
      </p>
      {deleteTransaction && (
        <button
          className="delete-button"
          aria-label="Delete transaction"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      )}
    </li>
  );
};
export default TransactionItem;
