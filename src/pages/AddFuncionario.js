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
import Snackbar from "@material-ui/core/Snackbar";
import getCep from "../functions/getEndereco";
import InputMask from "react-input-mask";
import Alert from "@material-ui/lab/Alert";
import Funcionario from "../functions/setFuncionario";
import DatePicker from "../components/datePicker";

import Footer from "../components/footer";
import "./Add.css";
const style = {
  margin: "4%",
};

class AddDoctor extends React.Component {
  constructor() {
    super();
    this.state = {
      isDoctor: false,
      showPassword: false,
      error: false,
      success: false,
      isEditable: true,
      bairro: "",
      cidade: "",
      estado: "",
      numero:"",
      logradouro: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.save = this.save.bind(this);
    this.checkCep = this.checkCep.bind(this);
  }
  async checkCep(event) {
    let value = event.target.value.replace(".", "");
    value = value.replace("-", "");
    console.log(value)

    let endereco = await getCep(value);
    if (endereco != false) {
      console.log(endereco);
      this.setState({
        [event.target.name]: value,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        logradouro: endereco.logradouro.replace(/([^\D])+/gim, ''),
      });
    } else {
      this.setState({
        [event.target.name]: value,
        isEditable: false,
      });
    }
  }

  save = async () => {
    console.log(this.state)
    let response = await Funcionario(
      this.state.nome,
      this.state.email,
      this.state.telefone,
      this.state.cep2,
      this.state.logradouro,
      this.state.numero,
      this.state.bairro,
      this.state.cidade,
      this.state.estado,
      this.state.dataContrato,
      this.state.salario,
      this.state.senha
    );
    if (response == "error") {
      this.setState({
        error: true,
        message: "Error ao logar"
      });
    } else {
      this.setState({
        success: true,
        message: "Salvo com sucesso"
      });
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
       <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={this.state.error}
            autoHideDuration={2000}
          >
            <Alert severity="error">Error ao Salvar</Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={this.state.success}
            autoHideDuration={2000}
          >
            <Alert severity="success">Salvo com sucesso</Alert>
          </Snackbar>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Cadastramento de funcionario
            </Grid>
            <Grid item xs={12} style={{ color: "#505050" }}>
              <Switch name="isDoctor" onChange={this.checkBox} name="isDoctor" />
              Médico
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
                label="Nº"
                onChange={this.handleDateChange}
                
                value={this.state.numero}
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
              label="Data de Contratação"
            />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="salario"
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
                name="senha"
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
                    name="especialidade"
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
                    name="crm"
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
              <Button onClick={this.save} variant="contained" fullWidth color="secondary">
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

export default AddDoctor;
