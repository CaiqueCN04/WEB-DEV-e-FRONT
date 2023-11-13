import {} from 'react'
import '../scss/Casos.scss'
 
function Casos(){
 
    return(
        <>
            <div className="containerCasos">
                <h5 id='titulocasos'>Casos recentes</h5>
                <section>
                    <div className="textocasos">
                            <p>
                                &emsp;Uma professora morreu, após ser esfaqueada por um aluno em uma escola estadual na zona
                                oeste de São Paulo.
                            </p>
                            <p>
                                &emsp;A vítima era Elisabeth Tenreiro, de 71 anos. De acordo com o secretário de Segurança
                                de São Paulo, Guilherme Derrite, outras três professoras e dois alunos foram afetadas neste
                                episódio.
                            </p>
                    </div>
                    <div className="imgscontext">
                        <img src="../imagens/imgcontext1.png" className='imagemcasos'/>
                    </div>
                </section>
 
                <br/><br/>
 
                <section>
                   
                        <div className="imgscontext"/>
                           
                            <div className="fs-1">
                                <h4 className='fs-1'>Outros acontecimentos: </h4>
                            </div>
                       
                        <div className="links">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Clique para acessar os Links
                            </button>


                            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Links</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        <a
                                            href="https://www.cnnbr/asil.com.br//nacional/jovem-esfaqueia-duas-professoras-no-interior-de-sp-vitimas-sobr/evivem/">Jovem
                                            esfaqueia duas professoras no interior de SP</a><br/><br/><a
                                            href="https://www.cnnbr/asil.com.br//nacional/ataque-contra-escolas-deixa-mortos-no-espirito-santo">Ataque
                                            contra escolas deixa mortos no Espírito Santo</a><br/><br/><a
                                            href="https://www.cnnbr/asil.com.br//nacional/aluno-atira-em-tres-estudantes-de-escola-publica-em-sobr/al-no-ceara/">Aluno
                                            aluno atira em 3 estudantes de escola pública em Sobr/al no Ceará</a><br/>
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                   
                </section>
 
            </div>
            
            
   
        </>
)
}
 
export default Casos