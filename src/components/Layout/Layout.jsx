import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Balance</h1>
        <p>Track your income and expenses</p>
        <nav className="app-nav">
          <NavLink to={"/"}>Overview</NavLink>
          <NavLink to={"/transactions"}>Transactions</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
