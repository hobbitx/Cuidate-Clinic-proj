import * as React from "react";
class Info extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
         {[...new Array(12)]
            .map(
              () => `batata .`
            )
            .join("\n")}
      </React.Fragment>
    );
  }
}

export default Info;
