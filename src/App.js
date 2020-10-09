import React, { Component } from "react";
import Mycars from "./components/Mycars";
import "./styles.css";

class App extends Component {
  state = {
    titre: "La liste de mes voitures"
  };

  changeTitle = (e) => {
    this.setState({titre: "Mon nouveau titre"}) 
  };

  changeViaParam = (titre) => {
    this.setState({
      titre:titre
    })  
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })    
  }
  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
        <button onClick={this.changeTitle}>Change the title</button>
        <button onClick={() => this.changeViaParam('Titre via un paramètre')}>
          Via parametre change</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>
          Binder le change</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre} />
      </div>
    );
  }
}

export default App;
