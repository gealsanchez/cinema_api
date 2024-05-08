import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=7ec6301b59d4b747b5d452a2b4ebaa57&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchMovies();
    }, [url])

    return { data }
}
