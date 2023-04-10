import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="./img/standard.jpg"/>
                    <Card.Body>
                        <Card.Title>Standard Bangalô</Card.Title>
                        <Card.Text>
                        Os quartos Standard possuem 18m², e são localizados mais proximos à recepção da pousada. Com um preço mais acessível, temos disponível 8 bangalôs.
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Veja Disponibilidade</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="./img/suite.jpg" />
                    <Card.Body>
                        <Card.Title>Suíte Bangalô</Card.Title>
                        <Card.Text>
                        Os quartos Suíte possuem 20m², acompanham uma confortável varandinha e possuem Garden View. São 8 suítes disponível.
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Veja Disponibilidade</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" img src="./img/deluxe.jpg" />
                    <Card.Body>
                        <Card.Title>Deluxe Bangalô</Card.Title>
                        <Card.Text>
                        Os quartos Deluxe possuem 20m², são localizados mais distantes da pousada e possuem Waterfall View, são disponibilizados 5 Deluxes Bangalôs.
                        </Card.Text>
                        <LinkContainer to="/">
                        <Button variant="warning">Veja Disponibilidade</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;