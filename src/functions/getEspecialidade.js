import config from "../config.json";

const func = config.baseURL + "especialidade";
export default async function get() {  
  let especialidades = [];
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
        especialidades = json;
    })
    .catch((error) => {
      console.error(error);
      especialidades = []
    });
  return especialidades;
}
