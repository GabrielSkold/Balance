import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview/Overview";
import Transactions from "./pages/Transactions/Transactions";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
