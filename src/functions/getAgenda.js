import config from "../config.json";

const agend = config.baseURL + "listaTodasConsultas";
export default async function get() {  
  let agenda = [];
  let myRequest = new Request(agend);
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
        agenda = json;
    })
    .catch((error) => {
      console.error(error);
      agenda = []
    });
  return agenda;
}
