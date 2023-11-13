import { } from 'react'
import '../scss/Home.scss'
function Home() {

    return (
        <>
            
            <div className="home">
                <img src='/imagens/logo.png' alt="logo" id="img-index" />
                <div id="textoindex">
                    <h1>CHALLENGE IBM : Smart Cities</h1>
                    <p>Em conjunto com a empresa IBM, nós, alunos da FIAP, estamos desenvolvendo um projeto que, depois de
                        analises e a escolha de um problema, auxilie a convivência humana em Cidades Inteligentes</p>
                </div>
                <div className="linkedin">
                    <div><img className="foto-integrantes" src="./imagens/caique.png" alt="" />
                        <p>CAIQUE CHAGAS</p>
                    </div>
                    <div><img className="foto-integrantes" src="./imagens/giuliano.png" alt="" />
                        <p>GIULIANO ROMANETO</p>
                    </div>
                    <div><img className="foto-integrantes" src="./imagens/pedro.png" alt="" />
                        <p>PEDRO CRISPIM</p>
                    </div>
                    <div><img className="foto-integrantes" src="./imagens/rafa.png" alt="" />
                        <p>RAFAEL AUTIERI</p>
                    </div>
                    <div><img className="foto-integrantes" src="./imagens/rodrigo.png" alt="" />
                        <p>RODRIGO VIANA</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home