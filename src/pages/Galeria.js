import * as React from "react";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import logo_text from "../imagens/logo_text.png";
import "./Galeria.css";
import Footer from "../components/footer2";


const IMAGES =
[{
        src: "https://i.ibb.co/LQPS8BM/image.jpg",
        thumbnail: "https://i.ibb.co/LQPS8BM/image.jpg",
        thumbnailWidth: 325,
        thumbnailHeight: 280,
        caption: "Cuide-se"
},
{
        src: "https://i.ibb.co/pz2FgVt/doctor.jpg",
        thumbnail: "https://i.ibb.co/pz2FgVt/doctor.jpg",
        thumbnailWidth: 325,
        thumbnailHeight: 280,
        caption: "Dr. Rodrigo"
},
{
        src: "https://i.ibb.co/P1kZYDC/equipe.jpg",
        thumbnail: "https://i.ibb.co/TPyBTWh/equipe.jpg",
        thumbnailWidth: 325,
        thumbnailHeight: 280,
        caption: "Nossa equipe"
},
{
  src: "https://i.ibb.co/jDfV55n/pediatria.jpg",
  thumbnail: "https://i.ibb.co/jDfV55n/pediatria.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
  caption: "Pedriatria"
},



{
  src: "https://i.ibb.co/f42bZYr/corona.jpg",
  thumbnail: "https://i.ibb.co/f42bZYr/corona.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
  caption: "Cuidado com o novo coronavirus"
},
{
  src: "https://i.ibb.co/ZcxWHr7/ultra.jpg",
  thumbnail: "https://i.ibb.co/ZcxWHr7/ultra.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
  caption: "Ultrassonografia"
},
{
  src: "https://i.ibb.co/Bg2gFfR/clinica-red.jpg",
  thumbnail: "https://i.ibb.co/Bg2gFfR/clinica-red.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
  caption: "Sua saúde em boas mãos"
},
{
  src: "https://i.ibb.co/qYfWSL7/doc.jpg",
  thumbnail: "https://i.ibb.co/qYfWSL7/doc.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
},

{
  src: "https://i.ibb.co/P14GkZ1/consultorio.jpg",
  thumbnail: "https://i.ibb.co/P14GkZ1/consultorio.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
},
{
  src: "https://i.ibb.co/yVZnK7V/sala.jpg",
  thumbnail: "https://i.ibb.co/yVZnK7V/sala.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
},
{
  src: "https://i.ibb.co/SB60y5Z/sala2.jpg",
  thumbnail: "https://i.ibb.co/SB60y5Z/sala2.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
},
{
  src: "https://i.ibb.co/j4c0MrN/sala-espera.jpg",
  thumbnail: "https://i.ibb.co/j4c0MrN/sala-espera.jpg",
  thumbnailWidth: 325,
  thumbnailHeight: 280,
},
{
  src: "https://i.ibb.co/3YBbYq7/tecnico-em-radiologia.jpg",
  thumbnail: "https://i.ibb.co/3YBbYq7/tecnico-em-radiologia.jpg",
  thumbnailWidth: 305,
  thumbnailHeight: 280,
},
{
  src: "https://i.ibb.co/0cN4cm8/Decora-o-para-consult-rio-de-pediatria-3.jpg",
  thumbnail: "https://i.ibb.co/0cN4cm8/Decora-o-para-consult-rio-de-pediatria-3.jpg",
  thumbnailWidth: 305,
  thumbnailHeight: 280,
},
{
  src: "https://i.ibb.co/fDNJtp4/tecnicas-de-organizacao-para-recepcao-de-clinicas.jpg",
  thumbnail: "https://i.ibb.co/fDNJtp4/tecnicas-de-organizacao-para-recepcao-de-clinicas.jpg",
  thumbnailWidth: 305,
  thumbnailHeight: 280
}
]


class Galeria extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <React.Fragment>
        <div idn="Logo" class="Logo"> 
          <img src={logo_text} align="center" className="photo" />
        </div>
        <div style={{ padding: "30px", marginLeft: "100px"}}>
          <Gallery images={IMAGES} enableImageSelection={false}/>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}


export default Galeria;
