import Layout from "../src/components/Layout";

export function getServerSideProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Dinamico(props) {
  return (
    <Layout titulo="Conteúdo Dinamico">
      <div>{props.numero}</div>
    </Layout>
  );
}
