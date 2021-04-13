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
import "./CardNoticia.css";



class CardNoticia extends React.Component {
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
            <Image floated="center" size="medium" src={this.props.dados.image} />
            <Card.Header>{this.props.dados.nome}</Card.Header>
            <Card.Description>
              {this.props.dados.texto}
              <br></br>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={this.openModal}>Ver Mais</Button>
            </div>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default CardNoticia;
