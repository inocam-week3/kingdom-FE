import axios from "axios";

export const instance = axios.create({
  baseURL:  process.env.REACT_APP_INOCAM_KEY
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
  config.headers.authorization &&
    (document.cookie = `accessToken=${config.headers.authorization};  path=/;`); // expires=${exp}
    // config.data.info -> 에러메시지를 
    // [ 프롵트 코드로 변경 ] 해서 전달해서 -> 전달받은 내용을 -> 코드로 -> 
  return config;
});