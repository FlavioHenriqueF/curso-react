import If, { Else } from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja Bem vindo <strong>{usuario.nome}</strong>
        <Else test={!usuario || !usuario.nome}>
          Seja Bem vindo <strong>User</strong>
        </Else>
      </If>
    </div>
  );
};
