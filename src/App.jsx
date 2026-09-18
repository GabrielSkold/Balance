import { Routes, Route } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview/Overview";
import Transactions from "./pages/Transactions/Transactions";
import Layout from "./components/Layout/Layout";
import { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    if (savedTransactions !== null) {
      return JSON.parse(savedTransactions);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

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
