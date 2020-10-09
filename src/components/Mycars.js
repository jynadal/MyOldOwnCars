import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  noCopy = () => {
    alert("Je vous demande de ne pas copier ce text!");
  };

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p onCopy={this.noCopy}>Lorem ipsum mon pote</p>

        <Car color="Beige">Ford</Car>
        <Car color="Blanche"></Car>
        <Car>Citroen</Car>
        <Car color="Noire">Kia</Car>
      </>
    );
  }
}

export default Mycars;
