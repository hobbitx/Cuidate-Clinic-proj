import React from "react";
import { Parallax, Background } from "react-parallax";
import clinica from "../imagens/clinica_red.JPG";
import logo from "../imagens/logo.png";
import logo_text from "../imagens/logo_text.png";
import Footer from "../components/footer2";
import "./Font.css";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from 'react-grid-system';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';

class Info extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <div> 
          <Parallax blur={2} bgImage={clinica} bgImageAlt="clinica" strength={100}>
            <img src={logo_text} align="right" style={{ padding: "50px" }} />
            <div style={{ height: "550px", width: "565px" }} />
          </Parallax>
        </div>
          <EventAvailableRoundedIcon/>
        <div> 
          <br></br><br></br><br></br>
          <img src= "https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjo0MiwidyI6MTAwMCwiZnMiOjQyLCJmZ2MiOiIjODQxMDEwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U29icmUgTsOzcw/geliat-extralight.png" align="left" style={{ padding: "150px" }}></img>
          <br></br>
          <div className="Font">
            <header className="Font-header">
              Somos uma clínica de atendimento médico que há mais de 20 anos trabalha para o seu bem-estar. Possuímos várias unidades em Belo Horizonte para melhor atender você e sua família.
              Buscamos a excelência no atendimento para que sejamos sempre referência em saúde e cuidado. Com aparelhos modernos e profissionais qualificados, prezamos pela rapidez, eficiência e qualidade.  
              Nosso foco é no atendimento humanizado e na adoção de novas tecnologias.
              Contamos com estrutura própria para a realização de exames e procedimentos pedidos pelos médicos.
              <br></br>
              Atendemos as especialidades: angiologia, dermatologia, cardiologia, clínica médica, endocrinologia, gastroenterologia, geriatria, ginecologia, pediatria, ortopedia, otorrinolaringologia e pneumologia.
              Especialidades de apoio: psicologia, terapia ocupacional, nutrição e fonoaudiologia.
            </header>
          </div>
        </div>
        <div style={{ padding: "50px" }}>
          <Container>
            <Row justify="center" align="center">
              <Col sm={4} >
                <img src="https://i.ibb.co/fMcdrVG/missao.jpg"/><br></br>
                <img src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjozOSwidyI6MTAwMCwiZnMiOjM5LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TWlzc8Ojbw/geliat-extralight.png" style={{ paddingLeft: "0px" }}/>
                <header className="Texto" border="50px">
                  Promover a saúde prestando um atendimento de qualidade e humanizado, com respeito ao indivíduo em todos os aspectos.
                </header>
              </Col>
              <Col sm={4}>
                <img src="https://i.ibb.co/d5Ch3Zm/valores.jpg"/><br></br>
                <img src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjozOSwidyI6MTAwMCwiZnMiOjM5LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VmFsb3Jlcw/geliat-extralight.png" style={{ paddingTop: "10px" }}/>
                <header className="Texto" border="50px">
                  Ética, competência, humanização, eficiência, qualidade, transparência, compromisso, respeito e confiança.
                </header>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <br></br>
           <img src= "https://i.ibb.co/zfh5Fvr/pngwing-com.png" alt="logo"></img>
          
        </div>
        
      <Footer />
      </div>
      
    );
  }
}

export default Info;
