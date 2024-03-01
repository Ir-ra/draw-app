import { useEffect, useState } from "react";

type DataType = {
  id: string;
  field: number;
  name: string;
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json();

        setLoading(false);
        setData(data);
        setError(null);
      } catch {
        throw new Error('Unable to load data, please try again later');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error }
}
