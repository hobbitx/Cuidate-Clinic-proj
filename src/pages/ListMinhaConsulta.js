import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, Row, Col } from 'react-grid-system';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getAgenda from "../functions/getAgenda";

import Footer from "../components/footer";

import "./List.css";

const style = {
  margin: "1%",
};

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



class ListMinhaConsulta extends React.Component {
  constructor() {
    super();
    this.state = {
      agenda: [],
      loading: true,
    };
}

async componentWillMount() {
  let response = await getAgenda();
  console.log(this.props)
  let idMed = this.props.location.pathname.split("/")[2]
  let agendas = response.filter( agenda => {
    return agenda.idmedico == idMed
  })
  console.log(response);
  this.setState({
    agenda: agendas,
    loading: false,
  });
}

  render() {
    return (
      <React.Fragment>

        <div style= {{
          paddingTop: "50px",
          paddingBottom: "30px"
        }} xs={12}>
            Minhas consultas
        </div>
        <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Data</StyledTableCell>
                    <StyledTableCell align="center">Hora</StyledTableCell>
                    <StyledTableCell align="center">Nome</StyledTableCell>
                    <StyledTableCell align="center">E-mail</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.agenda.map((row) => (
                    <StyledTableRow key={row.paciente}>
                    <StyledTableCell align="right">{row.dia.slice(0, 10)}</StyledTableCell>
                    <StyledTableCell align="right">{row.hora}</StyledTableCell>
                    <StyledTableCell align="right">{row.paciente}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
        <Footer />
      </React.Fragment>
    );
  }
}

export default ListMinhaConsulta;
