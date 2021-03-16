import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from 'react-router-dom'
import "./Header.css";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true,
      cadastramento: false,
      listagem: false,
    };
    this.menuCadastramento = this.menuCadastramento.bind(this);
    this.menuListagem = this.menuListagem.bind(this);
    this.closeCadastramento = this.closeCadastramento.bind(this);
    this.closeListagem = this.closeListagem.bind(this);
    this.home = this.home.bind(this);
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
  home = () =>{
    console.log( this.props.history)
  }
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
            
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link className="app-menu__link" to="/"><Button
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
                 <Link className="app-menu__link" to="/addFuncionario"> <MenuItem onClick={this.closeCadastramento}>
                    Funcionários
                  </MenuItem>
                  </Link>
                  <Link className="app-menu__link" to="/addPaciente"><MenuItem onClick={this.closeCadastramento}>
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
                   <Link className="app-menu__link" to="/listFuncionarios"><MenuItem onClick={this.closeListagem}>Funcionários</MenuItem></Link>
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
