import { appState } from "../AppState.js";
import { Cars } from "../Models/Car.js";
import { saveState } from "../Utils/Store.js";
// FIXME Step 8: when you need to change data in the AppState, write out your service


class CarsService {
  setActiveCar(carId) {
    let foundCar = appState.cars.find(c => c.id == carId)
    console.log(foundCar);
    appState.activeCar = foundCar
  }
  createCar(formData) {
    let newCar = new Car(formData)
    // console.log(newCar);
    appState.cars = [...appState.cars, newCar]
    saveState('cars', appState.cars)
  }
  removeCar(carId) {
    // NOTE test that things are talking to each other
    // console.log("it's the car service", carId);
    // NOTE give me a new array of cars, where all of the cars Id's do not match the Id I passed down
    let filteredArray = appState.cars.filter(c => c.id != id)
    appState.cars = filteredArray
    console.log('New array in AppState:', appState.cars);
    saveState('cars', appState.cars)
  }

}

let const carsService = new CarsService()