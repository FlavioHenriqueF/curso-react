import Cabecalho from "../src/components/Cabeçalho";
import Layout from "../src/components/Layout";

export default function Exemplo() {
  return (
    <Layout titulo="Usando Componentes">
      <Cabecalho title="Fundamentos de Next.js & React" />
    </Layout>
  );
}
