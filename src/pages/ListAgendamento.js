import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getAgenda from "../functions/getAgenda";

import "./List.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



class ListAgendamento extends React.Component {
  constructor() {
    super();

    this.state = {
        agenda: [],
        loading: true,
      };
  }

  async componentWillMount() {
    let response = await getAgenda();
    console.log(response);
    this.setState({
      agenda: response,
      loading: false,
    });
  }

  
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <div style={{'margin-top':'100%','color': '#B72B2B'}}>
            <CircularProgress />
          </div>
        ) : (
            <div>
            <div style= {{
            paddingTop: "50px",
            paddingBottom: "30px"
            }} xs={12}>
                Listar Consultas
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Data</StyledTableCell>
                        <StyledTableCell align="center">Hora</StyledTableCell>
                        <StyledTableCell align="center">Nome</StyledTableCell>
                        <StyledTableCell align="center">E-mail</StyledTableCell>
                        <StyledTableCell align="center">Telefone</StyledTableCell>
                        <StyledTableCell align="center">Medico</StyledTableCell>
                        <StyledTableCell align="center">Especialidade</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.agenda.map((row) => (
                        <StyledTableRow key={row.paciente}>
                        <StyledTableCell align="right">{row.dia.slice(0, 10)}</StyledTableCell>
                        <StyledTableCell align="right">{row.hora}</StyledTableCell>
                        <StyledTableCell align="right">{row.paciente}</StyledTableCell>
                        <StyledTableCell align="right">{row.email}</StyledTableCell>
                        <StyledTableCell align="right">{row.telefone}</StyledTableCell>
                        <StyledTableCell align="right">{row.medico}</StyledTableCell>
                        <StyledTableCell align="right">{row.especialidade}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        )}
      </React.Fragment>
    );
  }
}

export default ListAgendamento;
