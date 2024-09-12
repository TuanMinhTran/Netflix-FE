import axios from "axios";
import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/categories"
        );
        console.log("Categories API response:", response.data);
        setCategories(response.data);
      } catch (error) {
        setError("Error fetching categories");
      }
    };

    fetchCategories();
  }, []);

  return { data: categories, error };
};

export default useCategories;