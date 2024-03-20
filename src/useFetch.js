import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortConst.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data from the resource");
          }
          return res.json();
        })

        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortConst.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
