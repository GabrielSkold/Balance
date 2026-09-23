import { useState } from "react";
import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import TransactionsFilter from "../../components/TransactionFilters/TransactionFilters";

const Transactions = ({ transactions, addTransaction, deleteTransaction }) => {
  const [typeFilter, setTypeFilter] = useState("all");
  const filteredTransactions = transactions.filter(
    (transaction) => typeFilter === "all" || transaction.type === typeFilter,
  );

  return (
    <>
      <h1>Transactions</h1>
      <TransactionsForm addTransaction={addTransaction} />
      <TransactionsFilter
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <TransactionsList
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
        filteredTransactions={transactions}
      />
    </>
  );
};
export default Transactions;
