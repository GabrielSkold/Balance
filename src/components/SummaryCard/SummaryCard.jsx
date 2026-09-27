const SummaryCard = ({ label, amount }) => {
  return (
    <div className="summary-card">
      <h2>{label}</h2>
      <p>{amount}</p>
    </div>
  );
};
export default SummaryCard;
