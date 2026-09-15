import { Routes, Route, Router, data } from "react-router-dom";
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
      category: "Food",
      date: "2026-09/15",
    },
  ]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Overview />} />
          <Route
            path="/transactions"
            element={<Transactions transactions={transactions} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
