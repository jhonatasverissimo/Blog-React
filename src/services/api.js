import axios from "axios";

const api = axios.create({
    baseURL:'localhost/400/',
})

export default api;