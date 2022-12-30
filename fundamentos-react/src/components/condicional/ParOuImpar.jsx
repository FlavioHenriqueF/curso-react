export default (props) => {
  function ParImpar() {
    return props.numero % 2 == 0 ? "Par" : "Ímpar";
  }

  return (
    <div>
      <span>{ParImpar()}</span>
    </div>
  );
};
