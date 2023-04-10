import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import Banners from "../components/Banners"
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'

function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function fetchFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            if(!response.ok) {
                alert('Erro ao carregar funcionalidades')
                return
            }
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        fetchFuncionalidades()
    }, [])

    return (
        <>
        
        <Container className="conteudo-margin">
            <img src="./img/brasil.jpg" alt="brasil" width={1280} height={500}/>
            <h1>Cardapio</h1>
            <ListaFuncionalidades img src="./img/logo.png" funcionalidades={funcionalidades} />
        </Container>
        </>
    );
}

export default Funcionalidades