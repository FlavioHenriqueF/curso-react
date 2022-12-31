export default (props) => {
  const callback = props.quandoClicar;
  const min = 50;
  const max = 70;
  const gerarIdade = () => Math.floor(Math.random() * (min - max) + max);
  const isNerd = () => (Math.random() > 0.5 ? "Verdadeiro" : "Falso");

  return (
    <div>
      <button onClick={(e) => callback("João", gerarIdade(), isNerd)}>
        Fornecer Informações
      </button>
    </div>
  );
};
