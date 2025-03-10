// Définir l'interface Véhicule
interface Vehicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémenter la classe Voiture (Car) qui implémente l'interface Véhicule
class Car implements Vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  start(): void {
      console.log("Car engine started");
  }
}

// Créer une instance de la classe Car
const myCar = new Car('Toyota', 'Corolla', 2021);

// Appeler la méthode start
myCar.start();
