import { Routes, Route } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview/Overview";
import Transactions from "./pages/Transactions/Transactions";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Grocery shopping",
      amount: 2,
      type: "expense",
      category: "food",
      date: "2026-09/15",
    },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const remainingTransactions = transactions.filter(
      (transaction) => transaction.id !== id,
    );
    setTransactions(remainingTransactions);
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Overview />} />
          <Route
            path="/transactions"
            element={
              <Transactions
                transactions={transactions}
                addTransaction={addTransaction}
                deleteTransaction={deleteTransaction}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
