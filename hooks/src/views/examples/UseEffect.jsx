import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function calcImparOuPar(n) {
  if (n % 2 === 0) {
    return "Par";
  } else if (n % 2 != 0) {
    return "Impar";
  }
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  // EX #01
  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(function () {
    if (fatorial > 1000000) {
      document.title = "Ola!!!";
    }
  });

  // EX #01
  const [status, setStatus] = useState("");

  useEffect(function () {
    setStatus(calcImparOuPar(number));
  });

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não Existe" : fatorial}
          </span>
        </div>
        <input
          className="input"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
