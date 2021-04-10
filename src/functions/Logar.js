import config from "../config.json";

export default async function login(username, pass) {
  /* let url = config.baseURL + "/login";
  var body = {
    login: `${username}`,
    senha: `${pass}`,
  };
  let isLogin = "";
  let myRequest = new Request(url);
  await fetch(myRequest, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return "error";
      }
    })
    .then((json) => {
      isLogin = json;
    })
    .catch((error) => {
      console.error(error);
      isLogin = false;
    });
  return isLogin;
  */
 return "Robert"
}