# Bug List

Index File
1. onclick="app.carController.showCars()" is missing a s it should be onclick="app.carsController.showCars()"
2. Changed id listings to id cars in the index page so emphasize the names have to match

App File
1. Erased cars carsController = new CarsController() so nothing is connected

Car Model File
1. Removed name="make" and name="color" on the form inputs so that way the information you enter is never created on the new item
2. Removed the id in the removeCar button inside CardTemplate


Service File
1. In remove car I changed it from CarId to id in the filter to show the importance of naming convention and to show if it is grayed out it is not being used

AppState File 
1. I removed cars array from my appState so it is not showing anything