import * as React from "react";
import { render } from 'react-dom';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Endereco from "../functions/setEndereco";
import "./Add.css";
const style = {
    margin: "10%",
};

class AddAddress extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    save = async () => {
        let response = await Endereco.add(
            this.state.cep,
            this.state.logradouro,
            this.state.bairro,
            this.state.cidade,
            this.state.estado
        );
    };

    render() {
        return (
            <React.Fragment>
                <div style={style}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} >
                            Novo endereço
                        </Grid>
                        <Grid item xs={3}>
                            <InputMask
                                mask="99.999-999"
                                value={this.state.cep}
                                disabled={false}
                                maskChar=" " >
                                {() => <TextField id="CEP"
                                    label="CEP"
                                    placeholder="xx.xxx-xxx"
                                    multiline
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    onChange={this.onChange}
                                    InputProps={{ inputComponent: InputMask }}
                                />}
                            </InputMask>
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

export default AddAddress;
