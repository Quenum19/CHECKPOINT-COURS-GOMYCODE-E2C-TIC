// Code 01 : Correction et Conversion en TypeScript

import React from "react";

// Définition de l'interface pour les props
interface GreetingProps {
  name: string;
}

// Définition du composant fonctionnel avec typage des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;




.....................................................................



// Code 02 : Correction et Conversion en TypeScript

import React, { Component } from "react";

// Définition des types pour les props (aucune prop ici) et le state
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
