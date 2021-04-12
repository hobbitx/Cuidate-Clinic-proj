import React from "react";
import { Parallax, Background } from "react-parallax";
import clinica from "../imagens/clinica_red.JPG";
import logo from "../imagens/logo.png";
import logo_text from "../imagens/logo_text.png";
import Footer from "../components/footer2";
import "./Font.css";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from 'react-grid-system';

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
            <div style={{ height: "600px", width: "565px" }} />
          </Parallax>
        </div>
        <div> 
          <Container justify="center" >
            <Row justify="center" >
              <Col sm={1} align="right" className='Box'>
                <img src= "https://i.ibb.co/nQHsydH/calendar.jpg"/>
              </Col>
              <Col sm={4} >
                <img src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SG9yw6FyaW8gZGUgYXRlbmRpbWVudG8/geliat-extralight.png" style={{ paddingTop: "40px", paddingBottom: "10px" }}/>
                <header className="Texto-1" border="20px">
                Segunda - Sexta: 8h às 18h<br></br>
                Sábado: 8h às 12h
                </header>
              </Col>
              <Col sm={1}  className='Box'>
                <img src= "https://i.ibb.co/f1JZJgc/phone.jpg"/>
              </Col>
              <Col sm={4}>
                <br></br>
                <img src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGVsZWZvbmVzIGRlIENvbnRhdG8/geliat-extralight.png" style={{ paddingTop: "20px", paddingBottom: "10px" }}/>
                <header className="Texto-1" border="20px">
                  (31) 34555555 <br></br> (31)999999999
                </header>
              </Col>
            </Row>
          </Container>
        </div>  
        <div style={{ padding: "10px" }}>
          <Container className='Especial' >
            <img src= "https://see.fontimg.com/api/renderfont4/8Mzm0/eyJyIjoiZnMiLCJoIjo0NywidyI6MTAwMCwiZnMiOjQ3LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzhBMDAwMCIsInQiOjF9/U3VhIHNhw7pkZSBlbSBib2FzIG3Do29zLg/sambosa.png"/>
          </Container>
        </div>    
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
          <img src= "https://i.ibb.co/zfh5Fvr/pngwing-com.png" alt="logo"></img><br/><br/>
          <img src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjo0NywidyI6MTAwMCwiZnMiOjQ3LCJmZ2MiOiIjODAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Q29uaGXDp2Egbm9zc2FzIGVzcGVjaWFsaWRhZGVz/geliat-extralight.png"/>
        </div>
        <div>

          <br></br>
        </div>
        
      <Footer />
      </div>
      
    );
  }
}

export default Info;
