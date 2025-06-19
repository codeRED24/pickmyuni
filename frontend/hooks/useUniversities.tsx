import { useState, useEffect } from "react";
import axios from "axios";

export const useUniversities = (stream: string = "All") => {
  const [universities, setUniversities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      try {
        const endpoint =
          stream === "All"
            ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/college/top`
            : `${process.env.NEXT_PUBLIC_API_URL}/api/v1/college/top`;

        const response = await axios.get(endpoint, {
          params: stream !== "All" ? { stream } : undefined,
        });

        setUniversities(response.data);
        setError(null);
      } catch (err) {
        setError(
          axios.isAxiosError(err)
            ? err.response?.data?.message ||
                err.message ||
                "Failed to fetch universities"
            : err instanceof Error
            ? err.message
            : "An error occurred"
        );
        setUniversities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [stream]);

  return { universities, loading, error };
};
