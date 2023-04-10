import Container from 'react-bootstrap/Container';

function Tarifas() {
    return (
        
        <Container className='tarifa'>
            <h1>Tarifas e Promoções</h1>
            <div className='pai-tarifa'>
                <div className='filho-tarifa'>
                    <h3>Pacotes Fim de Semana <br/>Sexta á Domingo</h3>
                    <li>Double ou twin room</li>
                    <li>Standard - R$470</li>
                    <li>Suíte - R$570</li>
                    <li>Deluxe - R$690</li>
                </div>

                <div className='filho-tarifa2'>
                    <h3>Pacotes Feriados / Datas <br />Comemorativas</h3>
                    <li>Double ou twin room</li>
                    <li>Standard - R$530</li>
                    <li>Suíte - R$625</li>
                    <li>Deluxe - R$725</li>
                </div>

                <div className='filho-tarifa3'>
                    <h3>Pacotes Durante a Semana<br />Segunda á Quinta</h3>
                    <li>Double ou twin room</li>
                    <li>Standard - R$420</li>
                    <li>Suíte - R$510</li>
                    <li>Deluxe - R$580</li>
                </div>

            </div>
        </Container>
    );
}


export default Tarifas;