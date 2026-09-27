const currencyFormatter = new Intl.NumberFormat("sv-SE", {
  style: "currency",
  currency: "SEK",
});

const formatCurrency = (amount) => {
  return currencyFormatter.format(amount);
};
export default formatCurrency;
