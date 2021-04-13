import config from "../config.json";

const url = config.baseURL + "/Agendamento";
export default async function add(
  data,
  horario,
  nome,
  email,
  telefone
) {
  var body = {
    data: `${data}`,
    horario: `${horario}`,
    nome: `${nome}`,
    email: `${email}`,
    telefone: `${telefone}`
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
      if (response.status === 200) {
        return response.json();
      } else {
        return "error";
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return isLogin;
}
