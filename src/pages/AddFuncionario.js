import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import "./Add.css";
const style = {
  "margin": "15px",
};

class AddDoctor extends React.Component {
  constructor() {
    super();
    this.state={
        isDoctor: false,
        showPassword: false,
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkBox = this.checkBox.bind(this);
  }

  handleDateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  checkBox = (event) => {
      console.log(event.target)
    this.setState({
      [event.target.name]: !this.state [event.target.name],
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
            <Grid item xs={12} style={{ color: "#505050" }}>
              <Switch id="isDoctor" onChange={this.checkBox} name="isDoctor" />
              Médico
            </Grid>
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
                id="dataContrato"
                label="Data do contrato"
                placeholder="xx/xx/xx"
                multiline
                fullWidth
                color="secondary"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="salario"
                label="Salario"
                placeholder="5000"
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
                fullWidth
                type={this.state.showPassword ? 'text' : 'password'}
                color="secondary"
                variant="outlined"
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.checkBox}
                        name="showPassword"
                        onMouseDown={this.handleMouseDownPassword}
                        edge="end"
                      >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }}
              />
            </Grid>
            {
            this.state.isDoctor?
            ( 
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  id="especialidade"
                  label="Especialidade"
                  placeholder="Pediatria"
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
                  placeholder="xxxx"
                  multiline
                  fullWidth
                  color="secondary"
                  variant="outlined"
                />
              </Grid>
            </Grid>)
            :
            <div></div>
            }
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
