import Container from 'react-bootstrap/Container';

function Abasobre() {
    return (
        
        <Container className='sobre-1'>
            <div className='p-sobre'> 
                <div className='f-sobre'>
                    <img src="./img/Logo-Branco.png" alt="logo" width={500} />
                </div>
                <div className='f-sobre-txt'>
                    <h2>Missão</h2>
                    <p>Proporcionar uma experiência única de <br />
                    conforto e hospitalidade para cada <br />
                    hóspede, desfrutando da nossa linda e <br />
                    vasta natureza brasileira.</p>

                    <h2>Visão</h2>
                    <p>Ser referência consolidada no <br />
                    segmento de pousada do país.</p>

                    <h2>Valores</h2>
                    <p>Sustentabilidade, conforto, <br />
                    aconchego, acolhimento, respeito e, <br />
                    comprometimento.</p>

                </div>

            </div>

        </Container>
    );
}


export default Abasobre;