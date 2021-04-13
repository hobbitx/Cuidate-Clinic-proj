import config from "../config.json";

export default async function logar(username, pass) {
  let url = config.baseURL + "logar";
  var body = {
    user: `${username}`,
    senha: `${pass}`,
  };
  let login = "";
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
      login = json;
    })
    .catch((error) => {
      console.error(error);
      login = false;
    });
  return login;
}