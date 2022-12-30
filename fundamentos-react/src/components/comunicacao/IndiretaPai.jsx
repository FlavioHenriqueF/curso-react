import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  function fornecerInfo(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
    </div>
  );
};
