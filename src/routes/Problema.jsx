import {} from 'react';
import '../scss/Problema.scss';
 
function Problema() {
  return (
    <div className="containerProblema">
      <h2 className="tituloProblema">Problema</h2>
      <div className="gridproblem">
        <div className="imgsProblem">
          <img src="./imagens/imgproblema1.png" alt="Imagem 1" />
        </div>
        <div className="textoProblem">
          <p>
            &emsp;A segurança nas escolas é um assunto essencial para pais, professores e estudantes. Nesses últimos tempos, os incidentes de violência em escolas têm aumentado cada vez mais, não só no Brasil, como no mundo inteiro. Esse número aumentado acabou incentivando as pessoas a tentar criar ambientes mais seguros de aprendizado.
          </p>
          <p>
            &emsp;Para fazer ambientes escolares mais seguros, é necessário, primeiro, entender a raiz desse problema. Alguns dos fatores mais comuns que levam a esse problema são bullying, problemas com a saúde mental dos estudantes, falta de supervisão e medidas de proteção por parte da escola.
          </p>
        </div>
        <div className="imgsProblem">
          <img src="./imagens/imgproblema2.png" alt="Imagem 2" />
        </div>
      </div>
    </div>
  );
}
 
export default Problema;