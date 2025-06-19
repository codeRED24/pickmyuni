"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export const useCity = (id: number) => {
  const [city, setCity] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCity = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/city/${id}`
        );

        setCity(response.data.data);
        setError(null);
      } catch (err) {
        setError(
          axios.isAxiosError(err)
            ? err.response?.data?.message ||
                err.message ||
                "Failed to fetch city"
            : err instanceof Error
            ? err.message
            : "An error occurred"
        );
        setCity({});
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, [id]);

  return { city, loading, error };
};
