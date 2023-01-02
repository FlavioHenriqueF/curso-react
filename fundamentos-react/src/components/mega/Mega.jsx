import "./Mega.css";
import { useState } from "react";

export default (props) => {
  function mega(array) {
    const aleatorio = Math.floor(Math.random() * (60 + 1 - 1)) + 1;
    return array.includes(aleatorio) ? mega(array) : aleatorio;
  }

  const [numeros, setNumeros] = useState([]);
  const [repetir, setRepetir] = useState(props.qtde || 7);

  const numerosMega = [];
  function gerarNum() {
    const qtde = repetir;
    for (let i = 0; i < qtde; i++) {
      numerosMega.push(mega(numerosMega));
    }
    return setNumeros(numerosMega);
  }

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qnt de Números</label>
        <input
          type="number"
          value={repetir}
          onChange={(e) => {
            setRepetir(+e.target.value);
          }}
        />
      </div>
      <button onClick={gerarNum}>Gerar Números</button>
    </div>
  );
};

//     TENTATIVAS E ERROS //

// import { Component } from "react";

// class Mega extends Component {
//   state = {
//     numero: this.props.numberInitial || 0,
//     numCicles: this.props.number || 7,
//   };

//   inc = () => {
//     this.setState({
//       numero: this.state.numero + this.state.numCicles,
//     });
//   };

//   megaNumbers = (evento) => {
//     this.setState({
//       numCicles: +evento.target.value,
//     });
//   };

//   mega = () => {
//     const megaNumbers = (min, max) => {
//       return Math.floor(Math.random() * (max - min)) + min;
//     };

//     let newNumbers = [];
//     for (let i = 0; i < this.state.numCicles; i++) {
//       newNumbers.push(megaNumbers(1, 70));
//       console.Log(newNumbers);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h2>Mega Sena</h2>

//         <div>
//           <label htmlFor="qntNumeros">Quantos Numeros deseja gerar ?</label>
//           <input
//             id="qntNumeros"
//             type="number"
//             value={this.state.numCicles}
//             onChange={this.megaNumbers}
//           />
//         </div>
//         <button onClick={this.mega}>+</button>
//       </div>
//     );
//   }
// }

// export default Mega;

// export default (props) => {
//   const mega = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
//   };

//   let setNumberMega = [];
//   for (let i = 0; i < 7; i++) {
//     setNumberMega.push(mega(1, 60));
//   }

//   return (
//     <div>
//       <ul>
//         <li>
//           {setNumberMega.map((e) => (
//             <li>{setNumberMega}</li>
//           ))}
//         </li>
//       </ul>
//       <button onClick={mega}>Click</button>
//     </div>
//   );
// };

// import { useEffect, useState } from "react";

// export default ({ size = 7, min = 1, max = 10 }) => {
//   const [megaNumber, setMegaNumber] = useState([]);
//   const [getSize, setSize] = useState(size);

//   const handleRandomNumbers = () => {
//     const newNumbers = [];

//     do {
//       const generator = Math.floor(Math.random() * (max - min + 1)) + min;

//       if (newNumbers.includes(generator)) continue;

//       newNumbers.push(generator);
//     } while (getSize > newNumbers.length);

//     setMegaNumber(newNumbers);
//   };

//   const handleSize = (value) => setSize(value);

//   useEffect(() => handleRandomNumbers(), []);
//   useEffect(() => handleRandomNumbers(), [getSize]);

//   return (
//     <div>
//       <li> {megaNumber}</li>
//       <buttons setHandleRandomNumbers={handleRandomNumbers} />
//     </div>
//   );
// };
