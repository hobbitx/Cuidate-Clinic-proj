
    import config from "../config.json";

const url = config.baseURL + "endereco/cep";
export default async function add(
 
  cep
) {
  var body = {
    cep: `${cep}`
  }
  let endereco = "";
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
        endereco = json;
    })
    .catch((error) => {
      console.error(error);
      endereco = false;
    });
  return endereco;
}
