import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://localhost:3000/api" 
});

const vinylBackEnd = axios.create({
    baseURL: "http://20.195.212.173:5000/api"
});

export { axiosAPI, vinylBackEnd };
