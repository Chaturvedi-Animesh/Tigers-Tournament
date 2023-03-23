import { myAxios } from "./helper";

export const userRegister = (user) => {
  return myAxios
    .post("/tt/registerUser", user)
    .then((response) => response.data);
};

export const userLogin = (user) => {
  return myAxios.get("/tt/login", { params: user }).then((res) => res.data);
};
