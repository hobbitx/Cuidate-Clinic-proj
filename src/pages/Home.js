import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Conteudo from "../components/conteudo";

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Conteudo />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
