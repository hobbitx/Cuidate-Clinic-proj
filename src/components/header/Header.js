import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      cadastramento: false,
      listagem: false,
    };
    this.menuCadastramento = this.menuCadastramento.bind(this);
    this.menuListagem = this.menuListagem.bind(this);
    this.closeCadastramento = this.closeCadastramento.bind(this);
    this.closeListagem = this.closeListagem.bind(this);
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
  closeListagem = (event) => {
    console.log(event);
    this.setState({
      listagem: false,
    });
  };
  render() {
    return (
      <React.Fragment>
        <AppBar
          position="static"
          style={{
            "background-color": "#B72B2B",
          }}
        >
          <Toolbar className="app-header">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className="app-header_text"
            >
              Home
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className="app-header_text"
            >
              Galeria
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className="app-header_text"
            >
              Novo Endereço
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className="app-header_text"
            >
              Agendamento
            </Button>
            {this.state.logged ? (
              <div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className="app-header_text"
                  onClick={this.menuCadastramento}
                >
                  Cadastramento
                </Button>
                <Menu
                  id="cadastramento"
                  anchorEl={this.state.cadastramento}
                  open={Boolean(this.state.cadastramento)}
                  keepMounted
                  onClose={this.closeCadastramento}
                >
                  <MenuItem onClick={this.closeCadastramento}>
                    Funcionários
                  </MenuItem>
                  <MenuItem onClick={this.closeCadastramento}>
                    Pacientes
                  </MenuItem>
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
                  <MenuItem onClick={this.closeListagem}>Funcionários</MenuItem>
                  <MenuItem onClick={this.closeListagem}>Pacientes</MenuItem>
                  <MenuItem onClick={this.closeListagem}>Endereços</MenuItem>
                  <MenuItem onClick={this.closeListagem}>Agendamentos</MenuItem>
                  <MenuItem onClick={this.closeListagem}>
                    Minhas Consultas
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              ""
            )}
            <div className="login">
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  border: '1px solid',
                  borderRadius: "20px",
                  borderColor: '#fff',
                }}
                startIcon={<AccountCircle />}
              >
                {this.state.logged ? this.state.name : "Logar"}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Header;
