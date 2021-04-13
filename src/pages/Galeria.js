import * as React from "react";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import logo_text from "../imagens/logo_text.png";
import "./Galeria.css";

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
        thumbnailWidth: 550,
        thumbnailHeight: 280,
        caption: "Dr. Rodrigo"
},
 
{
        src: "https://i.ibb.co/P1kZYDC/equipe.jpg",
        thumbnail: "https://i.ibb.co/TPyBTWh/equipe.jpg",
        thumbnailWidth: 550,
        thumbnailHeight: 280,
        caption: "Nossa equipe"
},
{
  src: "https://i.ibb.co/jDfV55n/pediatria.jpg",
  thumbnail: "https://i.ibb.co/jDfV55n/pediatria.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 274,
  caption: "Pedriatria"
},
{
  src: "https://i.ibb.co/f42bZYr/corona.jpg",
  thumbnail: "https://i.ibb.co/f42bZYr/corona.jpg",
  thumbnailWidth: 318,
  thumbnailHeight: 274,
  caption: "Cuidado com o novo coronavirus"
},
{
  src: "https://i.ibb.co/ZcxWHr7/ultra.jpg",
  thumbnail: "https://i.ibb.co/ZcxWHr7/ultra.jpg",
  thumbnailWidth: 765,
  thumbnailHeight: 274,
  caption: "Ultrassonografia"
},

{
  src: "https://i.ibb.co/Bg2gFfR/clinica-red.jpg",
  thumbnail: "https://i.ibb.co/Bg2gFfR/clinica-red.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 274,
  caption: "Sua saúde em boas mãos"
},
{
  src: "https://i.ibb.co/qYfWSL7/doc.jpg",
  thumbnail: "https://i.ibb.co/qYfWSL7/doc.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 274
},
{
  src: "https://i.ibb.co/LQPS8BM/image.jpg",
  thumbnail: "https://i.ibb.co/LQPS8BM/image.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 274,
  caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: "https://i.ibb.co/LQPS8BM/image.jpg",
  thumbnail: "https://i.ibb.co/LQPS8BM/image.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 274,
  caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: "https://i.ibb.co/LQPS8BM/image.jpg",
  thumbnail: "https://i.ibb.co/LQPS8BM/image.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 274,
  caption: "After Rain (Jeshu John - designerspics.com)"
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
      </React.Fragment>
    );
  }
}


export default Galeria;
