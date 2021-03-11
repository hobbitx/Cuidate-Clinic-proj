import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Conteudo from "../components/conteudo";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Galeria from "../pages/Galeria";
import Info from "../pages/SobreNos";

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
            </Switch>
          </Conteudo>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Home;
