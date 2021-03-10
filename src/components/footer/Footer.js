import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import './Footer.css';

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" >
          <Toolbar className="app-footer">
            <Typography variant="h6" className="teste">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Footer;
