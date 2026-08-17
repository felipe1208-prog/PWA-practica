import axios from "axios";

const api = axios.create({
    baseURL: "https://dripping-powdering-sherry.ngrok-free.dev/api",
    withCredentials: true,
    headers: {
        // Este header le dice a Ngrok que salte la pantalla de advertencia en las APIs
        "ngrok-skip-browser-warning": "true",
    },
});

export default api;
