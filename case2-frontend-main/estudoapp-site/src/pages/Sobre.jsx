import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import Abasobre from '../components/Abasobre'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className='conteudo-margin'>
            <h1>Sobre nós</h1>
            <p>{sobre.text}</p>
            <Abasobre />
            <Depoimentos />
        </Container>
    );
}

export default Sobre