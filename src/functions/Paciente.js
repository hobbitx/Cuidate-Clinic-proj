import config from "../config.json";

const url = config.baseURL + "/paciente";
const add = async (
  nome,
  email,
  telefone,
  cep,
  logradouro,
  bairro,
  cidade,
  estado,
  peso,
  altura,
  tiposanguineo
) => {
  var body = {
    nome: `${nome}`,
    email: `${email}`,
    telefone: `${telefone}`,
    cep: `${cep}`,
    logradouro: `${logradouro}`,
    bairro: `${bairro}`,
    estado: `${estado}`,
    cidade: `${cidade}`,
    peso: `${peso}`,
    altura: `${altura}`,
    tiposanguineo: `${tiposanguineo}`,
  };
  let res = "";
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
    .then((json) => {
      res = json;
    })
    .catch((error) => {
      console.error(error);
      res = false;
    });
  return res;
};

export default { add };
