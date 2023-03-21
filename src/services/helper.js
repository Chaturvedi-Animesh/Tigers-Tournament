import axios from "axios"

const BASE_URL = "https://35.154.125.90:8082/kridabuzz"

export const myAxios = axios.create({baseURL : BASE_URL})