import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Logar from "../../functions/Logar";
import SvgIcon from "@material-ui/core/SvgIcon";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../imagens/unknown.svg";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      cadastramento: false,
      listagem: false,
      loginModal: false,
    };
    this.menuCadastramento = this.menuCadastramento.bind(this);
    this.menuListagem = this.menuListagem.bind(this);
    this.closeCadastramento = this.closeCadastramento.bind(this);
    this.closeListagem = this.closeListagem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.home = this.home.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.logar = this.logar.bind(this);
  }

  menuCadastramento = (event) => {
    this.setState({
      cadastramento: event.currentTarget,
    });
  };
  menuListagem = (event) => {
    console.log(event);
    this.setState({
      listagem: event.currentTarget,
    });
  };
  closeCadastramento = (event) => {
    this.setState({
      cadastramento: false,
    });
  };
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
  closeListagem = (event) => {
    console.log(event);
    this.setState({
      listagem: false,
    });
  };
  home = () => {
    console.log(this.props.history);
  };

  logar = async () => {
    console.log(this.state.user, this.state.senha);
    let user = await Logar(this.state.user, this.state.senha);
    console.log(user)
    this.setState({
      name: user[0].nome,
      id: user[0].idpessoa,
      logged: true,
      loginModal: false,
    });
  };
  handleDateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  checkBox = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.name]: !this.state[event.target.name],
    });
  };

  render() {
    return (
      <React.Fragment>
        <AppBar
          position="fixed"
          style={{
            "background-color": "#B72B2B",
          }}
        >
          <Toolbar className="app-header">
            <Link className="app-menu__link" to="/">
              <Logo />
            </Link>
            <Link className="app-menu__link" to="/">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text"
                onClick={this.home}
              >
                Home
              </Button>
            </Link>
            <Link className="app-menu__link" to="/Galeria">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text"
              >
                Galeria
              </Button>
            </Link>
            <Link className="app-menu__link" to="/NovoEndereco">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text"
              >
                Novo Endereço
              </Button>
            </Link>
            <Link className="app-menu__link" to="/Agendamento">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text"
              >
                Agendamento
              </Button>
            </Link>
            {this.state.logged ? (
              <div>
                <Link className="app-menu__link" to="/Galeria">
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    className="app-header_text"
                    onClick={this.menuCadastramento}
                  >
                    Cadastramento
                  </Button>
                </Link>

                <Menu
                  id="cadastramento"
                  anchorEl={this.state.cadastramento}
                  open={Boolean(this.state.cadastramento)}
                  keepMounted
                  onClose={this.closeCadastramento}
                >
                  <Link className="app-menu__link" to="/addFuncionario">
                    {" "}
                    <MenuItem onClick={this.closeCadastramento}>
                      Funcionários
                    </MenuItem>
                  </Link>
                  <Link className="app-menu__link" to="/addPaciente">
                    <MenuItem onClick={this.closeCadastramento}>
                      Pacientes
                    </MenuItem>
                  </Link>
                </Menu>

                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className="app-header_text"
                  onClick={this.menuListagem}
                >
                  Listagem
                </Button>
                <Menu
                  id="listagem"
                  anchorEl={this.state.listagem}
                  open={Boolean(this.state.listagem)}
                  keepMounted
                  onClose={this.closeListagem}
                >
                  <Link className="app-menu__link" to="/listFuncionarios">
                    <MenuItem onClick={this.closeListagem}>
                      Funcionários
                    </MenuItem>
                  </Link>
                  <Link className="app-menu__link" to="/ListPacientes">
                    <MenuItem onClick={this.closeListagem}>Pacientes</MenuItem>
                  </Link>
                  <Link className="app-menu__link" to="/listFuncionarios">
                    <MenuItem onClick={this.closeListagem}>Endereços</MenuItem>
                  </Link>
                  <Link className="app-menu__link" to="/listAgendamento">
                    <MenuItem onClick={this.closeListagem}>
                      Agendamentos
                    </MenuItem>
                  </Link>
                  <Link className="app-menu__link" to="/listMinhaConsulta">
                    <MenuItem onClick={this.closeListagem}>
                      Minhas Consultas
                    </MenuItem>
                  </Link>
                </Menu>
              </div>
            ) : (
              ""
            )}
            <div className="login">
              <Button
                variant="outlined"
                onClick={this.openModal}
                style={{
                  color: "white",
                  border: "1px solid",
                  borderRadius: "20px",
                  borderColor: "#fff",
                }}
                startIcon={<AccountCircle />}
              >
                {this.state.logged ? this.state.name : "Logar"}
              </Button>
            </div>
          </Toolbar>
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
                name="senha"
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
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Header;
