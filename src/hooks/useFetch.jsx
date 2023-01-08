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
        setData(payload);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [data, error, loading];
};

export default useFetch;
