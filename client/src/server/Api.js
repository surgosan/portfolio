import axios from "axios";

export default () => {
    return axios.create({
        baseURL: "https://159.223.127.141:8081/api"
    })
}