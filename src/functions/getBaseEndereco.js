import config from "../config.json";

const end = config.baseURL + "endereco";
export default async function getBaseEndereco() {  
  let enderecos = [];
  let myRequest = new Request(end);
  await fetch(myRequest, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
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
        enderecos = json;
    })
    .catch((error) => {
      console.error(error);
      enderecos = []
    });
  return enderecos;
}
