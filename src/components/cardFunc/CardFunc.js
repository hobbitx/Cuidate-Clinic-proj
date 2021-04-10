import * as React from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './CardFunc.css';

class CardFunc extends React.Component {
  constructor() {
    super();
  }
  render() {
    
    return (
      <React.Fragment>
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src= {this.props.image}
        />
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Meta>{this.props.cargo} {this.props.especialidade? this.props.especialidade:""}</Card.Meta>
        <Card.Description>
          <strong>email:</strong>{this.props.email}<br></br>
          <strong>telefone:</strong>{this.props.telefone}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Ver Mais
          </Button>
        </div>
      </Card.Content>
    </Card>
      </React.Fragment>
    );
  }
}

export default CardFunc;
