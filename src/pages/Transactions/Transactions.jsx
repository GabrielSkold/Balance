import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const Transactions = ({ transactions, addTransaction, deleteTransaction }) => {
  return (
    <>
      <h1>Transactions</h1>
      <TransactionsForm addTransaction={addTransaction} />
      <TransactionsList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </>
  );
};
export default Transactions;
