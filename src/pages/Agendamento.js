import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import getEspecialidade from "../functions/getEspecialidade";
import getMedico from "../functions/getMedico";
import DatePicker from "../components/datePicker";
import HourPicker from "../components/hourPicker";
import getPacientes from "../functions/getPacientes";
import setAgenda from "../functions/setAgendamento";
import getHorarios from "../functions/getHorarios";

import Footer from "../components/footer";

import "./Add.css";

const style = {
  margin: "10%",
};

class AddSchedule extends React.Component {
  constructor() {
    super();
    this.state = {
      especialidades: [],
      filteredEspecialidade: [],
      horarios: [],
      medicos: [],
      pacientes: [],
      horas: [],
      selectPaciente: "",
      loading: true,
      data: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.agendar = this.agendar.bind(this);
  }
  agendar = async () => {
    console.log(this.state);
    let paciente = this.state.pacientes.find((p) => {
      return p.idpaciente == this.state.selectPaciente;
    });
    if (paciente) {
      let formatedHora = new Date(this.state.data);
      let month = formatedHora.getMonth() + 1;
      let response = await setAgenda(
        formatedHora.getFullYear() + "/" + month + "/" + formatedHora.getDate(),
        this.state.hora,
        paciente.nome,
        paciente.email,
        paciente.telefone,
        this.state.idMedico
      );
      if (response != "error") {
        this.setState({
          success: true,
          error: false,
        });
      } else {
        this.setState({
          success: false,
          error: true,
        });
      }
    }
  };

  async componentWillMount() {
    let especialidade = await getEspecialidade();
    let pacientes = await getPacientes();
    let medico = await getMedico();
    console.log(especialidade);
    this.setState({
      especialidades: especialidade,
      pacientes: pacientes,
      showDoctors: false,
      showData: false,
      showHora: false,
      medicos: medico,
      loading: false,
      success: false,
      error: false,
      idMedico: "",
    });
  }

  handleDateChange = async (event) => {
    if (event.target.name == "selectEspecialidade") {
      let filteredEspecialidade = this.state.medicos.filter((medico) => {
        return medico.especialidade == event.target.value;
      });
      this.setState({
        [event.target.name]: event.target.value,
        filteredEspecialidade: filteredEspecialidade,
        showDoctors: true,
      });
    } else if (event.target.name == "medico") {
      let response = await getHorarios(event.target.value);
      console.log(response);
      this.setState({
        idMedico: event.target.value,
        horarios: response,
      });
    } else if (event.target.name == "data") {
      let data =
        event.target.value.split("-")[0] +
        "-" +
        event.target.value.split("-")[1] +
        "-" +
        event.target.value.split("-")[2];

      let disponiveis = this.state.horarios.filter((horario) => {
        return horario.data.split("T")[0] == data;
      });
      let min = 8;
      let max = 17;
      let atual = min;
      let horarios = [];
      while (atual <= max) {
        let hora = atual < 10 ? "0" + atual + ":00" : atual + ":00";
        if (
          disponiveis.find(function lock(actual) {
            let ac =
              actual.horario.split(":")[0] + ":" + actual.horario.split(":")[1];
            return ac == hora;
          })
        ) {
        } else {
          horarios.push(hora);
        }
        atual = atual + 1;
      }
      this.setState({
        horas: horarios,
        [event.target.name]: event.target.value,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div style={style}>
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
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Agendamento
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="selectPaciente"
                select
                fullWidth
                variant="outlined"
                onChange={this.handleDateChange}
                label="Paciente"
                helperText="Por favor, selecione a especialidade."
              >
                {this.state.pacientes.map((option) => (
                  <MenuItem key={option.idpessoa} value={option.idpessoa}>
                    {option.nome} : {option.email}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="selectEspecialidade"
                select
                fullWidth
                variant="outlined"
                onChange={this.handleDateChange}
                label="Especialidade"
                helperText="Por favor, selecione a especialidade."
              >
                {this.state.especialidades.map((option) => (
                  <MenuItem
                    key={option.especialidade}
                    value={option.especialidade}
                  >
                    {option.especialidade}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="medico"
                select
                disabled={!this.state.showDoctors}
                fullWidth
                variant="outlined"
                onChange={this.handleDateChange}
                label="Médico"
                helperText="Selecione o médico."
              >
                {this.state.filteredEspecialidade.map((option) => (
                  <MenuItem key={option.nome} value={option.idmedico}>
                    {option.nome}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                disabled={!this.state.showData}
                onChange={this.handleDateChange}
                internalId={"data"}
                label="Data"
              />
            </Grid>
            <Grid item xs={6}>
              <HourPicker
                disabled={!this.state.showHora}
                name="hora"
                horas={this.state.horas}
                onChange={this.handleDateChange}
                internalId={"hora"}
                label="Hora"
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button
                onClick={this.agendar}
                variant="contained"
                fullWidth
                color="secondary"
              >
                Agendar
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

export default AddSchedule;
