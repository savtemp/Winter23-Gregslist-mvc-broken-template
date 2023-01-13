import { CarsController } from '../app/Controllers/CarsController.js'
class App {
    carsController = new CarsController()
}

window["app"] = new App();
