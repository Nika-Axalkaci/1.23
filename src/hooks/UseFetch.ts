import React, { useCallback, useEffect, useState } from "react";
import { InRequset, Todos } from "../interfaces/todos.inteface";

const UseFetch = ({ url, method }: InRequset) => {
  const [response, setResponse] = useState<Todos[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFetch = useCallback(() => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data) => setResponse(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
    return () => {
      setResponse([]);
      setError(null);
      setLoading(false);
    };
  }, [url, method]);
  useEffect(() => {
    onFetch();
  }, [onFetch]);
  return { response, error, loading };
};
export default UseFetch;
