import React from "react";
import { Parallax, Background } from "react-parallax";
import clinica from "../imagens/clinica_red.JPG";
import logo_text from "../imagens/logo_text.png";
import Footer from "../components/footer2";
import Conheca from "../imagens/geliat-extralight (1).png";
import gastro from "../imagens/gastro.png";
import gineco from "../imagens/gineco.png";
import ortopedia from "../imagens/ortopedia.png";
import Otorrino from "../imagens/otorrino.png";
import Pedriatria from "../imagens/pedriatria.png";
import Derma from "../imagens/derma.png";
import Cardio from "../imagens/cardio.png";
import ClinicaMedica from "../imagens/ClinicaMedica.png";
import "./Font.css";
import { Container, Row, Col } from 'react-grid-system';
import Imgcardio from "../imagens/cardio-01.png";
import Imgclinico from "../imagens/clinico-01.png";
import Imgdermato from "../imagens/dermato-01.png";
import Imggastro from "../imagens/gastro-01.png";
import Imggineco from "../imagens/gineco-01.png";
import Imgortopedia from "../imagens/ortopedia-01.png";
import Imgpediatria from "../imagens/pediatria-01.png";
import Imgotorrino from "../imagens/otorrino-01.png";
import Imgendo from "../imagens/endocrino1.png";
import Imgoncologia from "../imagens/oncologia.png";
import Imgopulmao from "../imagens/pulmao1.png";
import Imggeriatria from "../imagens/geriatra.png";
import Onco from "../imagens/onco.png";
import geriatria from "../imagens/geriatria.png";
import endocrinologia from "../imagens/endocrinologia.png";
import pneumo from "../imagens/pneumo.png";
import CardNoticia from "../components/cardNoticia";
import Grid from "@material-ui/core/Grid";
import { Card } from "semantic-ui-react";

const style = {
  margin: "1%",
};

const noticias = [
  {
    nome: "Teste",
    texto: "Aleatoriedade",
    image: "https://ibcdn.canaltech.com.br/6LpyUmH_q-iP7yyAPqUGzoLneKE=/512x288/smart/i358573.png"
  },{
    nome: "Covid",
    texto: "Fiquem em ksa porra",
    image: "https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2020/03/entenda-a-diferenca-entre-coronavirus-covid-19-e-novo-coronavirus/mitosis-3876669_1920.jpg/@@images/10852f76-0ff0-436b-8ab0-f9ed27b09f9e.png"
  }
]

class Info extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div > 
          <Parallax blur={2} bgImage={clinica} bgImageAlt="clinica" strength={100}>
            <img src={logo_text} align="right" style={{ padding: "100px", paddingTop: "80px" }} />
            <div style={{ height: "600px", width: "565px" }} />
          </Parallax>
        </div>

        <div style={style}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                Noticias
              </Grid>
              <Card.Group>
                {noticias.map((item) => {
                  return <CardNoticia dados={item} />;
                })}
              </Card.Group>
            </Grid>
          </div>

        <div style={{ paddingTop: "50px", paddingBottom: "50px" }} > 
          <Container justify="center" >
            <Row justify="center" >
              <Col sm={1} align="right" className='Box'>
                <img src= "https://i.ibb.co/CPkvkj2/calendar.png"/> 
              </Col>
              <Col sm={4} >
                <img src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SG9yw6FyaW8gZGUgYXRlbmRpbWVudG8/geliat-extralight.png" style={{ paddingTop: "40px", paddingBottom: "10px" }}/>
                <header className="Texto-1" border="20px">
                Segunda - Sexta: 8h às 18h<br></br>
                Sábado: 8h às 12h
                </header>
              </Col>
              <Col sm={1}  className='Box'>
                <img src= "https://i.ibb.co/s3RccYV/phone.png"/>
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
          <img src= "https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjo0MiwidyI6MTAwMCwiZnMiOjQyLCJmZ2MiOiIjODQxMDEwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U29icmUgTsOzcw/geliat-extralight.png" align="left" style={{ padding: "170px", paddingTop: "190px" }}></img>
          <br></br>
          <div className="Font">
            <header className="Font-header">
              Somos uma clínica de atendimento médico que há mais de 20 anos trabalha para o seu bem-estar. Possuímos várias unidades em Belo Horizonte para melhor atender você e sua família.
              Buscamos a excelência no atendimento para que sejamos sempre referência em saúde e cuidado. Com aparelhos modernos e profissionais qualificados, prezamos pela rapidez, eficiência e qualidade.  
              Nosso foco é no atendimento humanizado e na adoção de novas tecnologias.
              Contamos com estrutura própria para a realização de exames e procedimentos pedidos pelos médicos.
              <br></br>
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
          <img src={Conheca} align="center" style={{ padding: "50px" }} />
        </div>
        <div>
          <Container>
            <Row justify="center" align="center">
              <Col sm={3} >
              <img src={Imgpediatria} align="center" style={{ paddingTop: "20px" }} /><br></br>
                <img src={Pedriatria} align="center" style={{ paddingTop: "20px", paddingLeft: "25px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imggastro} align="center" style={{ paddingTop: "20px" }} /><br></br>
                <img src={gastro} align="center" style={{ paddingTop: "20px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imgotorrino} align="center" style={{ paddingTop: "20px" }} /><br></br>
                <img src={Otorrino} align="center" style={{ paddingTop: "20px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imgclinico} align="center" style={{ paddingTop: "20px" }} /><br></br>
                <img src={ClinicaMedica} align="center" style={{ paddingTop: "20px" }} />
              </Col>
            </Row>
            <Row justify="center" align="center">
              <Col sm={3} >
              <img src={Imgortopedia} align="center" style={{ paddingTop: "40px" }} /><br></br>
                <img src={ortopedia} align="center" style={{ paddingTop: "20px", paddingLeft: "25px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imgdermato} align="center" style={{ paddingTop: "50px" }} /><br></br>
                <img src={Derma} align="center" style={{ paddingTop: "30px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imggineco} align="center" style={{ paddingTop: "60px" }} /><br></br>
                <img src={gineco} align="center" style={{ paddingTop: "20px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imgcardio} align="center" style={{ paddingTop: "70px" }} /><br></br>
                <img src={Cardio} align="center" style={{ paddingTop: "30px" }} />
              </Col>
            </Row>
            <Row justify="center" align="center">
              <Col sm={3} >
                <img src={Imgendo} align="center" style={{ paddingTop: "20px" }} /><br></br>
                <img src={endocrinologia} align="center" style={{ paddingLeft: "15px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imgoncologia} align="center" style={{ paddingTop: "50px" }} /><br></br>
                <img src={Onco} align="center" style={{ paddingTop: "20px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imgopulmao} align="center" style={{ paddingTop: "50px" }} /><br></br>
                <img src={pneumo} align="center" style={{ paddingTop: "20px" }} />
              </Col>
              <Col sm={3}>
              <img src={Imggeriatria} align="center" style={{ paddingTop: "70px" }} /><br></br>
                <img src={geriatria} align="center" style={{ paddingTop: "20px", paddingLeft: "15px" }} />
              </Col>
            </Row>
          </Container> 
          
          <br></br>
        </div>
        
      <Footer />
      </div>
      
    );
  }
}

export default Info;
