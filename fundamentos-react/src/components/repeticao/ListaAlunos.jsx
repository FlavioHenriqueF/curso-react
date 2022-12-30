import alunos from "../../data/alunos";

export default (props) => {
  const studentsList = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsList}</ul>
    </div>
  );
};
