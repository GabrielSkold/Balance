import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://api.frankfurter.dev/v2/rate/sek/eur",
        );

        if (!response.ok) {
          throw new Error("Could not fetch exchange rate.");
        }

        const data = await response.json();
        setExchangeRate(data.rate);
      } catch {
        setError("Could not load exchange rate. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  const convertedAmount = Number(amount) * exchangeRate;

  return (
    <>
      <h2>Currency converter</h2>
      {loading && <p>Loading exchange rate…</p>}
      {error && <p role="alert">{error}</p>}
      <label htmlFor="currency-amount">Amount in SEK</label>
      <input
        id="currency-amount"
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      {!loading && !error && Number(amount) > 0 && (
        <p>{convertedAmount.toFixed(2)} EUR</p>
      )}
    </>
  );
};
export default CurrencyConverter;
