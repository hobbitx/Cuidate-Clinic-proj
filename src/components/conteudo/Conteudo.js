import * as React from "react";
import "./Conteudo.css";

class Conteudo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
            Batata
        </div>
      </React.Fragment>
    );
  }
}

export default Conteudo;
