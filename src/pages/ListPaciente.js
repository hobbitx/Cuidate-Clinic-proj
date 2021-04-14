import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Card } from 'semantic-ui-react'
import CardFunc from "../components/cardFunc";
import DoneIcon from "@material-ui/icons/Done";
import CircularProgress from "@material-ui/core/CircularProgress";
import getPacientes from "../functions/getPacientes";

import Footer from "../components/footer";
import "./List.css";

const style = {
  margin: "1%",
};
class ListPacientes extends React.Component {
  constructor() {
    super();
    this.state = {
      pacientes: [],
      loading: true,
    };
  }
  async componentWillMount() {
    let response = await getPacientes();
    console.log(response);
    this.setState({
      pacientes: response,
      loading: false,
    });
  }
  render() {
    return (
      <React.Fragment>
          {this.state.loading ? (
          <div style={{'margin-top':'100%'}}>
            <CircularProgress />
          </div>
        ) : (
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Listagem de Pacientes
            </Grid>
            <Card.Group>
              {this.state.pacientes.map((item) => {
                return (
                    <CardFunc
                      paciente="true"
                      dados={item}
                    />
                );
              })}
            </Card.Group>
          </Grid>
        </div>
        )}
        
        <Footer />
      </React.Fragment>
    );
  }
}

export default ListPacientes;
