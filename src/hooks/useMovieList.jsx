import { useState, useEffect } from "react";
import axios from "axios";

import { MOVIES_API_URL } from "../constants/constant";

const useMovies = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(MOVIES_API_URL + "videos"
        );
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovies;
