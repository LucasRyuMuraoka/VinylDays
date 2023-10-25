import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://localhost:3000/api", 
});

export { axiosAPI };