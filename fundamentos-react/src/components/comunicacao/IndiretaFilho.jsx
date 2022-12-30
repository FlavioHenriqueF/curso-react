export default (props) => {
  const callback = props.quandoClicar;

  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => callback("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
