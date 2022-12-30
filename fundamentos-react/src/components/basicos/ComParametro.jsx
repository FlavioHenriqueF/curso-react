export default function ComParametro(props) {
  const aluno = props.aluno;
  const status = props.nota >= 7 ? "Aprovado" : "de  Recuperaçao";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong> {aluno} </strong>
        tem nota
        <strong> {props.nota} </strong>e esta
        <strong> {status}</strong>
      </p>
    </div>
  );
}
