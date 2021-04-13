import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import "date-fns";
import Snackbar from '@material-ui/core/Snackbar';
import getCep from "../functions/getEndereco";
import Alert from '@material-ui/lab/Alert';
import Funcionario from "../functions/setFuncionario";
import DatePicker from "../components/datePicker";
import "./Add.css";
const style = {
  margin: "10%",
};

class AddDoctor extends React.Component {
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
      logradouro:"",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.save = this.save.bind(this);
    this.checkCep = this.checkCep.bind(this);
    }
  async checkCep(event) {
    
    let endereco = await getCep(event.target.value);
    if (endereco != false) {
      console.log(endereco);
      this.setState({
        [event.target.name]: event.target.value,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        logradouro: endereco.logradouro
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        isEditable: false
      });
    }
  }

  save = async () => {
    let response = await Funcionario.add(
      this.state.nome,
      this.state.email,
      this.state.telefone,
      this.state.cep,
      this.state.logradouro,
      this.state.numero,
      this.state.bairro,
      this.state.cidade,
      this.state.estado,
      this.state.datacontrato,
      this.state.salario,
      this.state.senha
    );
    if (response == "error") {
      this.setState({
        error: true
      })
    }else{
      
    }
  };
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
        <Snackbar open={this.state.error} autoHideDuration={3000} >
          <Alert severity="errror">
            Error ao logar
          </Alert>
        </Snackbar>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Cadastramento de funcionario
            </Grid>
            <Grid item xs={12} style={{ color: "#505050" }}>
              <Switch id="isDoctor" onChange={this.checkBox} name="isDoctor" />
              Médico
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="nome"
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
                id="email"
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
                id="telefone"
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
                onChange={this.checkCep}
                placeholder="xx.xxx-xxx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
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
                id="numero"
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
            <DatePicker
              onChange={this.handleDateChange}
              internalId={"dataContrato"}
            />
              
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="salario"
                label="Salario"
                placeholder="5000"
                onChange={this.handleDateChange}
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="senha"
                label="Senha"
                placeholder="****"
                onChange={this.handleDateChange}
                fullWidth
                type={this.state.showPassword ? "text" : "password"}
                color="secondary"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.checkBox}
                        name="showPassword"
                        onMouseDown={this.handleMouseDownPassword}
                        edge="end"
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {this.state.isDoctor ? (
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextField
                    id="especialidade"
                    label="Especialidade"
                    placeholder="Pediatria"
                    onChange={this.handleDateChange}
                    multiline
                    fullWidth
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="crm"
                    label="CRM"
                    onChange={this.handleDateChange}
                    placeholder="xxxx"
                    multiline
                    fullWidth
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            ) : (
              <div></div>
            )}
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

export default AddDoctor;
