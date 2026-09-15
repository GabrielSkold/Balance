import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>Balance</h1>
        <p>Track your income and expenses</p>
        <nav>
          <NavLink to={"/"}>Overview</NavLink>
          <NavLink to={"/transactions"}>Transactions</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
