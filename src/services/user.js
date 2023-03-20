import { myAxios } from "./helper";

export const userRegister = (user) =>{
    return myAxios.post('/tt/registerUser',user).then((response)=> response.data)
}