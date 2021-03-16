import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import "./Add.css";
const style = {
  margin: "10%",
};

class AddPaciente extends React.Component {
  constructor() {
    super();
    this.state = {
      isDoctor: false,
      showPassword: false,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkBox = this.checkBox.bind(this);
  }

  handleDateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  checkBox = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.name]: !this.state[event.target.name],
    });
  };
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
          <Grid item xs={12}>Cadastramento de paciente</Grid>
            <Grid item xs={12}>
              <TextField
                id="nome"
                label="Nome"
                placeholder="Ex: Joao da Silva"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="E-mail"
                placeholder="example@gmail.com"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="telefone"
                label="Telefone"
                placeholder="xx xxxxx-xxxx"
                multiline
                color="secondary"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="CEP"
                label="CEP"
                placeholder="xxx.xxx-xxx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="logradouro"
                label="Logradouro"
                placeholder="Av Pitangui, 88"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="numero"
                label="Nº"
                placeholder="xx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="bairro"
                label="Bairro"
                placeholder="Cantina da serra"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="cidade"
                label="Cidade"
                placeholder="Belo Horizonte"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="estado"
                label="UF"
                placeholder="MG"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="peso"
                label="Peso"
                placeholder="xx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="altura"
                label="Altura"
                placeholder="170"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="tipoSanguineo"
                label="Tipo Sanguineo"
                placeholder="A+"
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth color="secondary">
                Salvar
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default AddPaciente;
