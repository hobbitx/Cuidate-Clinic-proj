import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Card, Image } from 'semantic-ui-react'
import CardFunc from "../components/cardFunc";
import DoneIcon from "@material-ui/icons/Done";
import "./List.css";

const style = {
  margin: "1%",
};
const funcionarios = [
  {
    nome: "Robert",
    image: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    cargo: "Medico",
    especialidade: "Plastica",
    email: "robert@clinicacuidar.com.br",
    telefone: "31999909",
  },
  {
    nome: "Renan",
    image: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    cargo: "Medico",
    especialidade: "Cirurgiao",
    email: "renan@clinicacuidar.com.br",
    telefone: "31999909",
  },
  {
    nome: "Mari",
    image: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    cargo: "Gerente",
    email: "mari@clinicacuidar.com.br",
    telefone: "31999909",
  },
  {
    nome: "Diego",
    image: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
    cargo: "Dono",
    email: "diego@clinicacuidar.com.br",
    telefone: "31999909",
  },
];
class ListFuncionarios extends React.Component {
  constructor() {
    super();
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Listagem de funcionarios
            </Grid>
            <Card.Group>
              {funcionarios.map((item) => {
                return (
                    <CardFunc
                    dados={item}
                    />
                );
              })}
            </Card.Group>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ListFuncionarios;
