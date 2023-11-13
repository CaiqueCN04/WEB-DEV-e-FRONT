import { } from 'react'
import '../scss/Contextualizacao.scss'

function Contextualizacao() {

    return (
        <>
            <div className='tudoContext'>
                <h5 id="titulocontext">Contextualização</h5>

                <div className="gridcontext">



                    <section className="contextCima">

                        <div className="imgscontext">
                            <img src="./imagens/imgcontext1.png" className='img' />
                        </div>

                            <div className="texto">

                                <p>

                                    &emsp;Analisamos dados que possuem os seus índices de casos aumentando cada vez mais nos últimos
                                    tempos, e chegamos a pensar no tema de Segurança nas Escolas. Desde 2002 até hoje (2023), 22
                                    ataques em escolas foram registrados, sendo que 10 deles foram nos últimos 2 anos.

                                </p>

                            </div>

                        

                    </section>



                    <section className="contextBaixo">

                        

                            <div className="texto">

                                <div className="textocontainer">

                                    <p>

                                        &emsp;Como a IBM é uma empresa que preza pela educação, não somente pela qual eles fornecem,
                                        mas pela educação como um todo, sabemos que a segurança das pessoas, enquanto dentro de
                                        qualquer instituto de ensino, deve ser garantida pelos principais cuidadores do local, o que
                                        não tem acontecido de uns tempos para cá.

                                    </p>

                                </div>

                            </div>
                        <div className="imgscontext">
                            <img src="./imagens/imgcontext1.png" className='img'/>

                        </div>

                    </section>











                </div>
            </div>
        </>
    )
}

export default Contextualizacao
