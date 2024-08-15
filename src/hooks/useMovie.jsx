import { useEffect, useState } from "react";
import axios from "axios";
import { MOVIES_API_URL } from "../constants/constant";

const useMovie = (id) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    id ? MOVIES_API_URL + "movies/" + id : null
                );
                setData(response.data);
            } catch (err) {
                setError("Error fetching data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { data, error, isLoading };
};

export default useMovie;
