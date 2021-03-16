import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import "./List.css";

const style = {
  margin: "1%",
};
const funcionarios = [
  { nome: "Robert" ,image: "https://avatars.githubusercontent.com/u/14082208?s=60&v=4" },
  { nome: "Renan" },
  { nome: "Mari" },
  { nome: "Diego" },  { nome: "Robert"  },
  { nome: "Renan" },
  { nome: "Mari" },
  { nome: "Diego" },  { nome: "Robert"  },
  { nome: "Renan" },
  { nome: "Mari" },
  { nome: "Diego" },  { nome: "Robert"  },
  { nome: "Renan" },
  { nome: "Mari" },
  { nome: "Diego" },  { nome: "Robert"  },
  { nome: "Renan" },
  { nome: "Mari" },
  { nome: "Diego" },
];
class ListFuncionarios extends React.Component {
  constructor() {
    super();
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Listagem de funcionarios
            </Grid>
            {funcionarios.map((item) => {
              return (
                <Grid item >
                  <Chip
                    avatar={
                      <Avatar alt={item.nome} src={item.image}>{item.nome.substring(0, 2).toUpperCase()}</Avatar>
                    }
                    label={item.nome}
                    clickable
                    color="secondary"
                    deleteIcon={<DoneIcon />}
                    variant="outlined"
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ListFuncionarios;
