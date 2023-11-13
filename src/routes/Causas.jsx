import {} from 'react';
import '../scss/Causas.scss'
function Causas() {
    return (
        <>
            <div className="containerCausas">
                <h5 className='titulocausas'>CAUSAS</h5>
                <section className="section">
                    <div className="imgscontext">
                        <img src="../imagens/causa1.png" alt="Causa 1" />
                    </div>
                    <div className="textocausas">
                        <p>
                            &emsp;Uma das causas é o desencadeamento de um efeito “contágio”. Esse efeito consiste em, quando
                            alguém comete algum crime grave, causa o choque e captura a atenção de várias pessoas pelo país,
                            outras pessoas com psicológico perturbado resolvem começar a fazer o mesmo para poderem ter atenção.
                        </p>
                    </div>
                </section>
 
                <section className="section reversed">
                    <div className="imgscontext">
                        <img src="../imagens/causa2.png" alt="Causa 2" />
                    </div>
                    <div className="textocausas">
                        <p>
                            &emsp;De acordo com o site da Globo, outro fator que também está contribuindo para o aumento de
                            violências em escolas é um tipo de um “jogo” que se iniciou na deep web (como o da baleia azul)
                            e está se espalhando por todas as redes sociais, como tiktok, twitter, instagram, entre outras.
                        </p>
                    </div>
                </section>
 
                <section className="section">
                    <div className="imgscontext">
                        <img src="../imagens/causa3.png" alt="Causa 3" />
                    </div>
                    <div className="textocausas">
                        <p>
                            &emsp;Nessa “brincadeira”, os envolvidos endeusam o massacre ocorrido na escola de Columbine, nos
                            Estados Unidos, e estão subindo hashtags (como a #HitlerVive, #RaçaAriana, entre outras) e trends para
                            poderem refazerem esse tal ato no dia 20 de abril de 2023, que é o dia em que este massacre fará 24 anos.
                        </p>
                    </div>
                </section>
            </div>
        </>
       
    );
}
 
export default Causas;