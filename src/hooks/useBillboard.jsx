import axios from "axios";
import { useState, useEffect } from "react";

import { MOVIES_API_URL } from "../constants/constant";

const useBillboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const random = Math.floor(Math.random() * 4);
    const fetchData = async () => {
      try {
        const response = await axios.get(MOVIES_API_URL + "videos");
        setData(response.data[random]);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useBillboard;
