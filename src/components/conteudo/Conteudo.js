import * as React from "react";
import "./Conteudo.css";

import Footer from "../footer";

class Conteudo extends React.Component {
  constructor() {
    super();

    this.state = {
      agenda: [],
      loading: true,
    };
  }

  async componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <main className="app-container" style={{ width: "100%" }}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Conteudo;
