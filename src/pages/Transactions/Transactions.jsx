import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const Transactions = ({ transactions, addTransaction }) => {
  return (
    <>
      <h1>Transactions</h1>
      <TransactionsForm addTransaction={addTransaction} />
      <TransactionsList transactions={transactions} />
    </>
  );
};
export default Transactions;
