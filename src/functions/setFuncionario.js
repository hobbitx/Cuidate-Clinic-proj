import config from "../config.json";

const url = config.baseURL + "funcionario";
export default async function add(
  nome,
  email,
  telefone,
  cep,
  logradouro,
  numero,
  bairro,
  cidade,
  estado,
  datacontrato,
  salario,
  senha
) {
  var body = {
    nome: `${nome}`,
    email: `${email}`,
    telefone: `${telefone}`,
    cep: `${cep}`,
    logradouro: `${logradouro + numero}`,
    bairro: `${bairro}`,
    estado: `${estado}`,
    cidade: `${cidade}`,
    datacontrato: `${datacontrato}`,
    salario: `${salario}`,
    senha: `${senha}`,
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
    .then((json) => {
      isLogin = nome;
    })
    .catch((error) => {
      console.error(error);
      isLogin = false;
    });
  return isLogin;
}
