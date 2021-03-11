import * as React from "react";
import './Conteudo.css';

class Conteudo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <main className="app-container">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Conteudo;
