import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const cancelRequest = useRef(false);
  let handleError = useErrorHandler();

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const resData = await res.json();
        setData(resData);
        setLoading(false);
        if (cancelRequest.current) return;
      } catch (err) {
        if (cancelRequest.current) return;
        handleError(err);
      }
    };
    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return { data, loading };
};

export default useFetch;
