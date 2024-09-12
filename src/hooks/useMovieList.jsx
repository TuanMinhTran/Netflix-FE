import { useState, useEffect } from "react";
import axios from "axios";

import { MOVIES_API_URL } from "../constants/constant";

const useMovies = (categoryId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching movies for categoryId:", categoryId);
    const fetchData = async () => {
      try {
        let url;
        if (categoryId === 1) {
          url = `${MOVIES_API_URL}movies`;
        } else {
          url = `${MOVIES_API_URL}movies/category/${categoryId}`;
        }
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovies;
