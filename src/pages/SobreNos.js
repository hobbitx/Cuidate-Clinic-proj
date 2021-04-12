import React from "react";
import { Parallax, Background } from "react-parallax";
import clinica from "../imagens/clinica_red.JPG";
import logo from "../imagens/logo.png";
import logo_text from "../imagens/logo_text.png";
import Footer from "../components/footer2";


const slideImages = [
  '../imagens/corona.JPG',
  '../imagens/doctor.JPG',
  '../imagens/equipe.JPG',
];

const fadeProperties = {
  duration: 3000,
  pauseOnHover: true
};

const Info = () => (
  <div>
    <div>
      <Parallax blur={1} bgImage={clinica} bgImageAlt="clinica" strength={200}>
        <img src={logo_text} align="right" style={{ padding: "50px" }} />
        <div style={{ height: "600px", width: "1024px" }} />
      </Parallax>
    </div>
    <div>
      <br></br><br></br><br></br>
      <img src= "https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjo0MiwidyI6MTAwMCwiZnMiOjQyLCJmZ2MiOiIjODQxMDEwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U29icmUgTsOzcw/geliat-extralight.png"></img>
      <br></br>
      
      Somos uma clínica de atendimento médico que há mais de 20 anos trabalha para o seu bem-estar. Possuímos várias unidades em Belo Horizonte para melhor atender você e sua família.
      Buscamos a excelência no atendimento para que sejamos sempre referência em saúde e cuidado. Com aparelhos modernos e profissionais qualificados, prezamos pela rapidez, eficiência e qualidade.  
      Contamos com estrutura própria para a realização de exames e procedimentos pedidos pelos médicos.
      
      Atendemos as especialidades: angiologia, dermatologia, cardiologia, clínica médica, endocrinologia, gastroenterologia, geriatria, ginecologia, pediatria, ortopedia, otorrinolaringologia e pneumologia.
      Especialidades de apoio: psicologia, terapia ocupacional, nutrição e fonoaudiologia.

    </div>
    <div>
      <br></br>oioioioiooioiUse the background component for custom elements or
      even an empty div with fixed dimensions to have a height for the parallax.
      or even an empty div with fixed dimensions to have a height for the
      parallax. or even an empty div with fixed dimensions to have a height for
      the parallax.
      <img src= "https://i.ibb.co/zfh5Fvr/pngwing-com.png" alt="logo"></img>
      
    </div>
    
   <Footer />
  </div>
  
);


export default Info;
