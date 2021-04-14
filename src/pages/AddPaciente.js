import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paciente from "../functions/setPaciente";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Footer from "../components/footer";
import InputMask from "react-input-mask";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import getCep from "../functions/getEndereco";
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
      isEditable: true,
      bairro: "",
      cidade: "",
      estado: "",
      logradouro: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.save = this.save.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.checkCep = this.checkCep.bind(this);
  }

  save = async () => {
    console.log(this.state);
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
    let value = event.target.value.replace(".", "");
    value = value.replace("-", "");
    this.setState({
      [event.target.name]: value,
    });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      error: false,
    });
  };
  async checkCep(event) {
    let value = event.target.value.replace(".", "");
    value = value.replace("-", "");
    let endereco = await getCep(value);
    if (endereco != false) {
      console.log(endereco);
      this.setState({
        [event.target.name]: event.target.value,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        logradouro: endereco.logradouro,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        isEditable: false,
      });
    }
  }
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
              vertical: "top",
              horizontal: "center",
            }}
            message="Error ao adicionar paciente"
            open={this.state.error}
            autoHideDuration={3000}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
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
            <InputMask
                mask="99.999-999"
                value={this.state.cep}
                disabled={false}
                name="cep"
                maskChar=" "
                onChange={this.checkCep}
              >
                {() => (
                  <TextField
                    name="cep2"
                    label="CEP"
                    placeholder="xx.xxx-xxx"
                    multiline
                    fullWidth
                    color="secondary"
                    variant="outlined" 
                    InputProps={{ inputComponent: InputMask }}
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={8}>
              <TextField
                name="logradouro"
                value={this.state.logradouro}
                label="Logradouro"
                inputProps={{
                  disabled: Boolean(this.state.isEditable),
                  readOnly: Boolean(this.state.isEditable),
                }}
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
                value={this.state.numero}
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
                value={this.state.bairro}
                inputProps={{
                  disabled: Boolean(this.state.isEditable),
                  readOnly: Boolean(this.state.isEditable),
                }}
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
                value={this.state.cidade}
                inputProps={{
                  disabled: Boolean(this.state.isEditable),
                  readOnly: Boolean(this.state.isEditable),
                }}
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
                value={this.state.estado}
                label="UF"
                inputProps={{
                  disabled: Boolean(this.state.isEditable),
                  readOnly: Boolean(this.state.isEditable),
                }}
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
