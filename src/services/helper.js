import axios from "axios"

const BASE_URL = "http://13.233.214.100:8082/kridabuzz"

export const myAxios = axios.create({baseURL : BASE_URL})