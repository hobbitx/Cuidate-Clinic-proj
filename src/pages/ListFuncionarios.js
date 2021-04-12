import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Card } from "semantic-ui-react";
import CardFunc from "../components/cardFunc";
import CircularProgress from "@material-ui/core/CircularProgress";
import getFuncionarios from "../functions/getFuncionario";
import "./List.css";

const style = {
  margin: "1%",
};

class ListFuncionarios extends React.Component {
  constructor() {
    super();

    this.state = {
      funcionarios: [],
      loading: true,
    };
  }
  async componentWillMount() {
    let response = await getFuncionarios();
    console.log(response);
    this.setState({
      funcionarios: response,
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
          <div style={style}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                Listagem de funcionarios
              </Grid>
              <Card.Group>
                {this.state.funcionarios.map((item) => {
                  return <CardFunc dados={item} />;
                })}
              </Card.Group>
            </Grid>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ListFuncionarios;
