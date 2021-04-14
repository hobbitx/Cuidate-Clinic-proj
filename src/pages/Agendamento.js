import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import getEspecialidade from "../functions/getEspecialidade";
import getMedico from "../functions/getMedico";
import DatePicker from "../components/datePicker";
import HourPicker from "../components/hourPicker";
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
      medicos: [],
      loading: true,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  async componentWillMount() {
    let especialidade = await getEspecialidade();
    let medico = await getMedico();
    console.log(especialidade);
    this.setState({
      especialidades: especialidade,
      medicos: medico,
      loading: false,
    });
  }

  handleDateChange = (event) => {
    let filteredEspecialidade = this.state.medicos.filter((medico) => {
      return medico.especialidade == event.target.value;
    });
    this.setState({
      [event.target.name]: event.target.value,
      filteredEspecialidade: filteredEspecialidade,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Agendamento
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
              <TextField
                name="selectEspecialidade"
                select
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
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
              <DatePicker
                onChange={this.handleDateChange}
                internalId={"data"}
                label="Data"
              />
            </Grid>
            <Grid item xs={6}>
              <HourPicker
                onChange={this.handleDateChange}
                internalId={"data"}
                label="Data"
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth color="secondary">
                Agendar
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default AddSchedule;
