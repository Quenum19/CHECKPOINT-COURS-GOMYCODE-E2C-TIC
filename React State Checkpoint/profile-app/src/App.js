import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Développeur full-stack passionné par React.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Développeur Web"
      },
      show: false,
      timeElapsed: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Méthode pour basculer l'état show
  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  }

  // Cycle de vie - componentDidMount pour démarrer l'intervalle
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000); // Met à jour chaque seconde
  }

  // Cycle de vie - componentWillUnmount pour nettoyer l'intervalle
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profil de la personne</h1>
        <button onClick={this.toggleShow}>
          {show ? "Cacher le profil" : "Afficher le profil"}
        </button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}

        <p>Temps écoulé depuis le montage: {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
