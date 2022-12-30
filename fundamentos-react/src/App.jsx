import "./App.css";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React </h1>

      <div className="Cards">
        <Card titulo="#07 - Desafio Repetição" color="blueviolet">
          <TabelaProdutos titulo="Monte seu Pc Gamer" />
        </Card>

        <Card titulo="#06 - Repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Couto">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro" color="#E8B71A">
          <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={7.1} />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
