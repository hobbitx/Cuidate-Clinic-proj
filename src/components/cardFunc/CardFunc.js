import * as React from "react";
import { Card, Image } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "semantic-ui-css/semantic.min.css";
import "./CardFunc.css";

class CardFunc extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      cadastramento: false,
      listagem: false,
      loginModal: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  closeModal = (event) => {
    this.setState({
      loginModal: false,
    });
  };
  openModal = (event) => {
    if (this.state.logged == false) {
      this.setState({
        loginModal: true,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Image floated="right" size="mini" src={this.props.dados.image} />
            <Card.Header>{this.props.dados.nome}</Card.Header>
            {this.props.dados.paciente ? (
              ""
            ) : (
              <Card.Meta>
                {this.props.dados.cargo}{" "}
                {this.props.dados.especialidade
                  ? this.props.dados.especialidade
                  : ""}
              </Card.Meta>
            )}
            <Card.Description>
              <strong>email:</strong>
              {this.props.dados.email}
              <br></br>
              <strong>telefone:</strong>
              {this.props.dados.telefone}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={this.openModal}>Ver Mais</Button>
            </div>
          </Card.Content>
        </Card>
        <Dialog
          open={this.state.loginModal}
          onClose={this.closeModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DialogContent>
            <div>
              Logradouro: {this.props.dados.logradouro}<br/>
              Bairro: {this.props.dados.bairro}<br/>
              Cidade: {this.props.dados.cidade}<br/>
              Estado: {this.props.dados.estado}<br/>
              CEP: {this.props.dados.cep}<br/>
              
            </div>
            {this.props.paciente ? (
              <div>
                Peso: {this.props.dados.peso} KG <br/>
                Altura:  {this.props.dados.altura} CM <br/>
                Tipo Sanguineo: {this.props.dados.tiposanguineo}<br/>
              </div>
            ) : (
              <div>
              Salario: R$ {this.props.dados.salario}<br />
              Data do contrato: {this.props.dados.datacontrato.split("T")[0]}<br />
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={this.closeModal}
              style={{
                color: "#B72B2B",
                border: "1px solid",
                borderRadius: "20px",
                borderColor: "#fff",
              }}
            >
              {"Fechar"}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CardFunc;
