import config from "../config.json";

const url = config.baseURL + "agendaDoMedico";
export default async function add(
    idMedico
) {
  var body = {
    medico: `${idMedico}`,
  };
  let horarios = [];
  let myRequest = new Request(url);
  await fetch(myRequest, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return "error";
    }
  })
  .then((json) => {
    horarios = json;
  })
  .catch((error) => {
    console.error(error);
    horarios = []
  });
  return horarios;
}
