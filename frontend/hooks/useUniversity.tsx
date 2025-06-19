"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export const useUniversity = (id: number) => {
  const [college, setCollege] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollege = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/college/${id}`
        );

        setCollege(response.data.data);
        setError(null);
      } catch (err) {
        setError(
          axios.isAxiosError(err)
            ? err.response?.data?.message ||
                err.message ||
                "Failed to fetch college"
            : err instanceof Error
            ? err.message
            : "An error occurred"
        );
        setCollege({});
      } finally {
        setLoading(false);
      }
    };

    fetchCollege();
  }, [id]);

  return { college, loading, error };
};
