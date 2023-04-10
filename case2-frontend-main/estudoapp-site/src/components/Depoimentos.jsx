import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
      <>
      
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="./img/perfil-1.png" alt="Foto do depoimento" className='rounded' width={100} />
            </Col>
            <Col sm="12" md="10">
                <strong className='forte'>Cristina Tavares</strong>
                <p>
                “Dias maravilhosos que passei na Pousada Vale Paraíso, tudo incrível… recepção, café da manhã, quarto, área de lazer!!! super indico, espero voltar em breve.”
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="./img/perfil-2.png" alt="Foto do depoimento 2" className='rounded' width={100} />
            </Col>
            <Col sm="12" md="10">
                <strong className='forte'>Kelly Melo</strong>
                <p>
                “Ótima pousada em Visconde de Mauá, na minha opinião uma das melhores. Sempre receptivos, os funcionários são maravilhosos e a comida também. Amo esse lugar!!!”
                </p>
            </Col>
    </Row>       
    </>
    )
}

export default Depoimentos