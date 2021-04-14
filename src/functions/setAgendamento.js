import config from "../config.json";

const url = config.baseURL + "agenda";
export default async function add(data, hora, nome, email, telefone, idMedico) {
  var body = {
    data: `${data}`,
    horario: `${hora}`,
    nome: `${nome}`,
    email: `${email}`,
    telefone: `${telefone}`,
    medico_id: `${idMedico}`,
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
        isLogin = response.json();
      } else {
        isLogin = "error";
      }
    })
    .catch((error) => {
      isLogin = "error";
    });
  return isLogin;
}
