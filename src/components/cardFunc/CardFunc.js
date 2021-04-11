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
            <Image floated="right" size="mini" src={this.props.image} />
            <Card.Header>{this.props.name}</Card.Header>
            {this.props.paciente ? (
              ""
            ) : (
              <Card.Meta>
                {this.props.cargo}{" "}
                {this.props.especialidade ? this.props.especialidade : ""}
              </Card.Meta>
            )}
            <Card.Description>
              <strong>email:</strong>
              {this.props.email}
              <br></br>
              <strong>telefone:</strong>
              {this.props.telefone}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={this.openModal}>
                Ver Mais
              </Button>
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
              <TextField
                name="user"
                label="Username"
                placeholder="username"
                multiline
                fullWidth
                onChange={this.handleDateChange}
                color="secondary"
                variant="outlined"
              />
              <TextField
                id="pass"
                label="Senha"
                style={{ "margin-top": "10px" }}
                placeholder="****"
                onChange={this.handleDateChange}
                fullWidth
                type={this.state.showPassword ? "text" : "password"}
                color="secondary"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.checkBox}
                        name="showPassword"
                        onMouseDown={this.handleMouseDownPassword}
                        edge="end"
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                onClick={this.logar}
                style={{
                  color: "#B72B2B",
                  border: "1px solid",
                  borderRadius: "20px",
                  borderColor: "#fff",
                }}
              >
                {this.state.logged ? this.state.name : "Logar"}
              </Button>
            </DialogActions>
          </Dialog>
      </React.Fragment>
    );
  }
}

export default CardFunc;
