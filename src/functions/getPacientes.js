import config from "../config.json";

const func = config.baseURL + "paciente";
export default async function get() {  
  let funcionarios = [];
  let myRequest = new Request(func);
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
        funcionarios = json;
    })
    .catch((error) => {
      console.error(error);
      funcionarios = []
    });
  return funcionarios;
}
