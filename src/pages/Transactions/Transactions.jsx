import TransactionsList from "../../components/TransactionsList/TransactionsList";

const Transactions = ({ transactions }) => {
  return (
    <>
      <h1>Transactions</h1>
      <TransactionsList transactions={transactions} />
    </>
  );
};
export default Transactions;
