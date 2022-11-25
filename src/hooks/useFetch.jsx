import de from "date-fns/esm/locale/de/index.js";
import { useState, useEffect } from "react";

const useFetch = (url, options = { method: "GET" }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((payload) => {
        // console.log(payload);
        setData(payload);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const refetch = (url, options) => {
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((payload) => {
        console.log(payload);
        setData(payload);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return [data, error, loading, refetch];
};

export default useFetch;
