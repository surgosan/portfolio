import axios from "axios";

export default () => {
    return axios.create({
        baseURL: "https://sanchezalvarez-wmwph.ondigitalocean.app:8081/api"
    })
}