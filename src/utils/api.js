import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2IxYjA2NTU2MmNhZjg4OWI0MWQ1ODNlNDZhM2NhZiIsInN1YiI6IjY0NDExZWUyZmNlYzJlMDRiZGQ4ZDk3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0eHwcJ3ULA-7RT9RaVQFjV-tulX-2b54RqA-9aGLILc";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};