import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paciente from "../functions/setPaciente";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Footer from "../components/footer";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "./Add.css";

const style = {
  margin: "10%",
};

const initialState = {
  isDoctor: false,
  showPassword: false,
  error: false,
};
class AddPaciente extends React.Component {
  constructor() {
    super();
    this.state = {
      isDoctor: false,
      showPassword: false,
      error: false,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.save = this.save.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  save = async () => {
    console.log(this.state)
    let response = await Paciente.add(
      this.state.nome,
      this.state.email,
      this.state.telefone,
      this.state.cep,
      this.state.logradouro,
      this.state.bairro,
      this.state.cidade,
      this.state.estado,
      this.state.peso,
      this.state.altura,
      this.state.tipoSanguineo
    );
    if (response == "error") {
      this.setState({
        error: true,
      });
    } else {
      this.setState(initialState);
    }
  };
  handleDateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      error: false,
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
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            message="Error ao adicionar paciente"
            open={this.state.error}
            autoHideDuration={3000}
            action={
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
            }
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Cadastramento de paciente
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="nome"
                label="Nome"
                onChange={this.handleDateChange}
                placeholder="Ex: Joao da Silva"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="E-mail"
                onChange={this.handleDateChange}
                placeholder="example@gmail.com"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="telefone"
                label="Telefone"
                onChange={this.handleDateChange}
                placeholder="xx xxxxx-xxxx"
                multiline
                color="secondary"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="cep"
                label="CEP"
                onChange={this.handleDateChange}
                placeholder="xxx.xxx-xxx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                name="logradouro"
                label="Logradouro"
                onChange={this.handleDateChange}
                placeholder="Av Pitangui, 88"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                name="numero"
                label="Nº"
                onChange={this.handleDateChange}
                placeholder="xx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="bairro"
                label="Bairro"
                onChange={this.handleDateChange}
                placeholder="Cantina da serra"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="cidade"
                label="Cidade"
                onChange={this.handleDateChange}
                placeholder="Belo Horizonte"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="estado"
                label="UF"
                onChange={this.handleDateChange}
                placeholder="MG"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="peso"
                label="Peso"
                onChange={this.handleDateChange}
                placeholder="xx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="altura"
                label="Altura"
                onChange={this.handleDateChange}
                placeholder="170"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="tipoSanguineo"
                label="Tipo Sanguineo"
                onChange={this.handleDateChange}
                placeholder="A+"
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={this.save}
                fullWidth
                color="secondary"
              >
                Salvar
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default AddPaciente;
