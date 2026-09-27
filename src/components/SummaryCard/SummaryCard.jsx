import formatCurrency from "../../utils/formatCurrency";

const SummaryCard = ({ label, amount }) => {
  const formattedAmount = formatCurrency(amount);
  return (
    <div className="summary-card">
      <h2>{label}</h2>
      <p>{formattedAmount}</p>
    </div>
  );
};
export default SummaryCard;
