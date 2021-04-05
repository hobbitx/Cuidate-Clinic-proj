import React from 'react';
import { Parallax, Background } from 'react-parallax';
import clinica from "../imagens/clinica_red.JPG";
import logo from "../imagens/logo.png";
import logo_text from "../imagens/logo_text.png";

const Info = () => (
  <div>
    <Parallax
      blur={1}
      bgImage={ clinica }
      bgImageAlt="clinica"
      
      strength={200}>
      
      <img src={logo_text} align= 'right' style={{padding: '50px'}} />
      <div style={{ height: '600px', width: '1024px'}} />
    </Parallax>


    <div>
      <img src={logo} />
    </div>
    <div>
      <br></br>oioioioiooioiUse the background component for custom elements      or even an empty div with fixed dimensions
      to have a height for the parallax.      or even an empty div with fixed dimensions
      to have a height for the parallax.      or even an empty div with fixed dimensions
      to have a height for the parallax.     
    </div>
  </div>
);

export default Info;
/*    <Parallax blur={10} strength={300} >
      <div>Use the background component for custom elements      or even an empty div with fixed dimensions
      to have a height for the parallax.      or even an empty div with fixed dimensions
      to have a height for the parallax.      or even an empty div with fixed dimensions
      to have a height for the parallax.     .</div>
     
      <Background className="custom-bg" >
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" style={{ height: 800 }}/>
      </Background>
    </Parallax> */