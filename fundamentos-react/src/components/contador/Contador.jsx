import "./Contador.css";
import { Component } from "react";

import Display from "./Display";
import Button from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    number: this.props.numberInitial || 0,
    passo: this.props.passoInitial || 5,
  };

  inc = () => {
    this.setState({
      number: this.state.number + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      number: this.state.number - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display number={this.state.number} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Button setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}
export default Contador;
