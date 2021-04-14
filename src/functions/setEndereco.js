import config from "../config.json";

const url = config.baseURL + "endereco";
export default async function add(
  cep,
  logradouro,
  bairro,
  cidade,
  estado
) {
  var body = {
    cep: `${cep}`,
    logradouro: `${logradouro}`,
    bairro: `${bairro}`,
    cidade: `${cidade}`,
    estado: `${estado}`
  };
  let isLogin = "";
  let myRequest = new Request(url);
  await fetch(myRequest, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      if (response.status === 201) {
        isLogin =  "true";
      } else {
       
      isLogin =  "error";
      }
    })
    .catch((error) => {
      console.error(error);
      isLogin =  "error";
    });
  return isLogin;
}
