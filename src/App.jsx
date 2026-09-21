import { Routes, Route } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview/Overview";
import Transactions from "./pages/Transactions/Transactions";
import Layout from "./components/Layout/Layout";
import { useState, useEffect } from "react";

function App() {
  const [storageResult] = useState(() => {
    try {
      const savedTransactions = localStorage.getItem("transactions");

      if (savedTransactions === null) {
        return { transactions: [], loadFailed: false };
      }

      const parsedTransactions = JSON.parse(savedTransactions);

      if (Array.isArray(parsedTransactions)) {
        return {
          transactions: parsedTransactions,
          loadFailed: false,
        };
      }

      return { transactions: [], loadFailed: true };
    } catch {
      return { transactions: [], loadFailed: true };
    }
  });

  const [transactions, setTransactions] = useState(storageResult.transactions);

  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    if (storageResult.loadFailed) {
      return;
    }

    try {
      localStorage.setItem("transactions", JSON.stringify(transactions));
      setSaveError("");
    } catch {
      setSaveError(
        "Changes could not be saved. They may be lost when you reload.",
      );
    }
  }, [transactions, storageResult.loadFailed]);

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
      {storageResult.loadFailed && (
        <p role="alert">
          Saved transactions could not be loaded. Changes will not be saved.
        </p>
      )}
      {saveError && <p role="alert">{saveError}</p>}
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
