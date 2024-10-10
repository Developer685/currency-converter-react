import { useEffect, useState } from "react";

export const useRatesData = () => {

  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://apii.currencyapi.com/v3/latest?apikey=cur_live_RnlhxOI7cFnvy5BBJ5nUPg6qwIYZqSL0UJ08aXE7");

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { meta, data } = await response.json();

        setRatesData({
          state: "succes",
          meta,
          data,
        });
      }

      catch {
        setRatesData({
          state: "error",
        });
      }
    }
    setTimeout(fetchRates, 1000);
  }, []);

  return ratesData;
}