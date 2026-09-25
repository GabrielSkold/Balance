import "./CategorySummary.css";
const CategorySummary = ({ expenseTransactions, totalExpenses }) => {
  const categories = [
    {
      value: "food",
      label: "Food",
    },
    {
      value: "housing",
      label: "Housing",
    },
    {
      value: "other",
      label: "Other",
    },
    {
      value: "transportation",
      label: "Transportation",
    },
  ];

  return (
    <>
      <h2>Expenses by category</h2>
      {categories.map((category) => {
        const categoryTransactions = expenseTransactions.filter(
          (transaction) => transaction.category === category.value,
        );
        const total = categoryTransactions.reduce(
          (sum, transaction) => sum + transaction.amount,
          0,
        );
        const percentage =
          totalExpenses > 0 ? (total / totalExpenses) * 100 : 0;
        return (
          <div key={category.value}>
            <p>
              {category.label}: {total}
            </p>
            <div className="category-bar">
              <div
                className="category-bar-fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CategorySummary;
