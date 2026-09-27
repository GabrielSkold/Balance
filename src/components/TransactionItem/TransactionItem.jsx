import formatCurrency from "../../utils/formatCurrency";
import { ShoppingCart, House, Car, Wallet, Tag } from "lucide-react";
const categoryIcons = {
  food: ShoppingCart,
  housing: House,
  transportation: Car,
  salary: Wallet,
  other: Tag,
};

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

  const Icon = categoryIcons[transaction.category] || Tag;
  return (
    <li className="transaction-item">
      <span className="transaction-icon">
        <Icon aria-hidden="true" />
      </span>
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
