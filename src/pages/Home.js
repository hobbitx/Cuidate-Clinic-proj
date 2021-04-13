import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Conteudo from "../components/conteudo";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Galeria from "../pages/Galeria";
import Info from "../pages/SobreNos";
import AddFuncionario from "./AddFuncionario";
import AddPaciente from "./AddPaciente";
import ListFuncionarios from "./ListFuncionarios";
import ListPacientes from "./ListPaciente";
import NovoEndereco from "./NovoEndereco";
import ListMinhaConsulta from './ListMinhaConsulta';
import ListAgendamento from './ListAgendamento';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

class Home extends React.Component {
  constructor() {
    super();
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Conteudo>
            <Switch>
              <Route exact path="/" component={Info} />
              <Route path="/galeria" component={Galeria} />
              <Route path="/addFuncionario" component={AddFuncionario} />
              <Route path="/addPaciente" component={AddPaciente} />
              <Route path="/listFuncionarios"  component={ListFuncionarios} />
              <Route path="/ListPacientes"  component={ListPacientes} />
              <Route path="/NovoEndereco"  component={NovoEndereco} />
              <Route path="/listMinhaConsulta" component={ListMinhaConsulta}/>
              <Route path="/listAgendamento" component={ListAgendamento}/>
            </Switch>
          </Conteudo>
         
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Home;
