import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as FacebookIcon } from "../../imagens/facebook.svg";
import { ReactComponent as GoogleIcon } from "../../imagens/google.svg";
import { ReactComponent as WhatsAppIcon } from "../../imagens/whatsapp.svg";
import { ReactComponent as InstagramIcon } from "../../imagens/instagram.svg";
import "./Footer.css";

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar className="app-footer">
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <GoogleIcon />
            </IconButton>
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Footer;
