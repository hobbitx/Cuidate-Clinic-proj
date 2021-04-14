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
import getBaseEndereco from "../functions/getBaseEndereco";

import Footer from "../components/footer";

import "./List.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.error.light,
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



class ListEndereco extends React.Component {
  constructor() {
    super();

    this.state = {
        endereco: [],
        loading: true,
      };
  }

  async componentWillMount() {
    let response = await getBaseEndereco();
    console.log(response);
    this.setState({
      endereco: response,
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
                Base de Endereços
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Estado</StyledTableCell>
                        <StyledTableCell align="center">Cidade</StyledTableCell>
                        <StyledTableCell align="center">Bairro</StyledTableCell>
                        <StyledTableCell align="center">CEP</StyledTableCell>
                        <StyledTableCell align="center">Logradouro</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.endereco.map((row) => (
                        <StyledTableRow key={row.idbase_enderecos}>
                        <StyledTableCell align="center">{row.idbase_enderecos}</StyledTableCell>
                        <StyledTableCell align="center">{row.estado}</StyledTableCell>
                        <StyledTableCell align="center">{row.cidade}</StyledTableCell>
                        <StyledTableCell align="center">{row.bairro}</StyledTableCell>
                        <StyledTableCell align="center">{row.cep}</StyledTableCell>
                        <StyledTableCell align="center">{row.logradouro}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        )}
        
        <Footer />
      </React.Fragment>
    );
  }
}

export default ListEndereco;
