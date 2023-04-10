import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Banners from '../components/Banners'
import Tarifas from '../components/Tarifas';

function Home() {
    return (
        <>
            <Banners />
            <Container>
                <Destaques />
            </Container>
            <Tarifas />
        </>
    );
}

export default Home;