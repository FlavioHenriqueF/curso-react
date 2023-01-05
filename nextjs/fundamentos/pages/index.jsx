import Navegador from "../src/components/Navegador";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
        margin: "10px",
      }}
    >
      <Navegador texto="Estiloso" cor="#9400d3" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" />
      <Navegador texto="JSX" destino="/jsx" cor="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegação #02" destino="/client/sp-2/321" cor="blue" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
      <Navegador
        texto="Integração com API #01"
        destino="/integracao"
        cor="pink"
      />
    </div>
  );
}
