import axios from "axios";

const instance = axios.create({
    baseURL: "https://burgerreact-92419.firebaseio.com/",
});

export default instance;
