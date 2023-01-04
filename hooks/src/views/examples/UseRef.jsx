import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function (s1, s2) {
  const array = [];

  for (let i in s1) {
    const firstV = s1[i] || "";
    const secondV = s2[i] || "";

    array.push(firstV + secondV);
  }

  return array;
};

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function () {});

  useEffect(
    function () {
      count.current++;
      myInput2.current.focus();
    },
    [value1]
  );

  useEffect(
    function () {
      count.current++;
      myInput1.current.focus();
    },
    [value2]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Eexercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          ref={myInput1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Eexercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInput2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;