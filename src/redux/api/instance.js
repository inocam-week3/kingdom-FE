import axios from "axios";
import jwtDecode from "jwt-decode";

export const instance = axios.create({
  baseURL:  process.env.REACT_APP_SERVER_KEY
});

instance.interceptors.request.use((config) => {
  const accessToken =
    document.cookie &&
    document.cookie
      .split(";")
      .filter((cookies) => cookies.includes("accessToken"))[0]
      ?.split("=")[1];
  if (accessToken) config.headers.authorization = accessToken;
  return config;
});

instance.interceptors.response.use((config) => {
  // console.log(config.headers.authorizatio);
  const decode = jwtDecode(config.headers?.authorization);
  console.log("decode", `${decode && JSON.stringify(decode)}`);  

  if (config.headers.authorization) {
    const expiresTime = new Date() // new Date(1690253395000).toUTCString()
    expiresTime.setMinutes(expiresTime.getMinutes()+30)
    document.cookie = `accessToken=${config.headers.authorization}; expires=${expiresTime.toUTCString()} path=/;`
  } 
  if (config.headers.refreshtoken) {
    const expiresTime = new Date()
    expiresTime.setDate(expiresTime.getDate()+3)
    document.cookie = `refreshtoken=${config.headers.refreshtoken}; expires=${expiresTime.toUTCString()} path=/;`
  }
  return config;
});