import "./App.css";

import Mega from "./components/mega/Mega.jsx";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input.jsx";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React </h1>

      <div className="Cards">
        <Card titulo="#13 - Desafio MegaSena" color="#d946ef">
          <Mega />
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
          <Contador numberInitial={10} />
        </Card>

        <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#991b1b">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#22c55e">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={21} />
          <UsuarioInfo usuario={{ nome: "Fernando" }} />
          <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
        </Card>

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
