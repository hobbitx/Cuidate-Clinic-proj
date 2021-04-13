import * as React from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputMask from "react-input-mask";
import MaterialInput from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import getEspecialidade from "../functions/getEspecialidade";
import "./Add.css";

const style = {
  margin: "10%",
};

class AddSchedule extends React.Component {
  constructor() {
    super();
    this.state = {
        especialidades: [],
        medicos: [],
        loading: true,
      };
  }
  async componentWillMount() {
    let response = await getEspecialidade();
    console.log(response);
    this.setState({
      especialidades: response,
      loading: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Agendamento
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="especialidades"
                select
                label="Especialidade"
                helperText="Por favor, selecione a especialidade.">
                {this.state.especialidades.map((option) => (
                  <MenuItem key={option.especialidade} value={option.especialidade}>
                    {option.especialidade}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="medicos"
                select
                label="Médico"
                helperText="Selecione o médico.">
                {this.state.medicos.map((option) => (
                  <MenuItem key={option.medico} value={option.medico}>
                    {option.medico}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
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
