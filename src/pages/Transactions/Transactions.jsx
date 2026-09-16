import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const Transactions = ({ transactions }) => {
  return (
    <>
      <h1>Transactions</h1>
      <TransactionsForm />
      <TransactionsList transactions={transactions} />
    </>
  );
};
export default Transactions;
