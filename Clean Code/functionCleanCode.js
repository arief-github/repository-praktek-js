// 2. Functions
// 2.1. use descriptive name when naming functions
// Dont
function toggle(){

}

function agreed(user) {

}

// Do

// descriptive
function toggleThemeSwitcher() {

}

// if its boolean, using question name, yes or no
function didAgreeToAllTerms(user) {

}


// use default arguments
// Dont
function printAllFilesInDirectory(dir) {
    const directory = dir || "./";
}

// Do
function printAllFilesInDirectory(dir = "./") {
  return dir;
}


// limit the number of arguments
// Having three arguments is already excessive
// dont make function handle many task
// Dont
function sendPushNotification(title, message, image, isSilent, delayMs) {

}

// sendPushNotification("New Message", "...", "http://...", false, 1000);

// Do
function sendPushNotification({title, message, image, isSilent, delayMs}) {
  return {title, message, image, isSilent, delayMs}
}

const notificationConfig = {
    title: "New Message",
    message: "...",
    image: "http://...",
    isSilent: false,
    delayMs: 1000,
}

// const result = sendPushNotification(notificationConfig);
//
// console.log(result);


// avoid executing multiple actions in a function
// this method should do one thing at a time,
// Don't
function pingUser(users) {
  users.forEach((user) => {
    const userRecord = database.lookup(user);
    if (!userRecord.isActive()) {
      ping(user);
    }
  });
}


// Do
// function pingInactiveUsers(users) {
//   users.filter(!isUserActive).forEach(ping);
// }
//
// function isUserActive(user) {
//   const userRecord = database.lookup(user);
//   return userRecord.isActive();
// }

// avoid using flags as arguments
// Dont
// function createFile(name, isPublic) {
//   if (isPublic) {
//     fs.create(`./public/${name}`);
//   } else {
//     fs.create(name);
//   }
// }


// Do
function createFile(name) {
  fs.create(name);
}

function createPublicFile(name) {
  createFile(`./public/${name}`);
}


// Do not repeat yourself(DRY)
// Dont
function renderCarsList(cars) {
  cars.forEach((car) => {
    const price = car.getPrice();
    const make = car.getMake();
    const brand = car.getBrand();
    const nbOfDoors = car.getNbOfDoors();

    render({ price, make, brand, nbOfDoors });
  });
}

function renderMotorcyclesList(motorcycles) {
  motorcycles.forEach((motorcycle) => {
    const price = motorcycle.getPrice();
    const make = motorcycle.getMake();
    const brand = motorcycle.getBrand();
    const seatHeight = motorcycle.getSeatHeight();

    render({ price, make, brand, seatHeight });
  });
}

// Do
function renderVehiclesList(vehicles) {
  vehicles.forEach((vehicle) => {
    const price = vehicle.getPrice();
    const make = vehicle.getMake();
    const brand = vehicle.getBrand();

    const data = { price, make, brand };

    switch (vehicle.type) {
      case "car":
        data.nbOfDoors = vehicle.getNbOfDoors();
        break;
      case "motorcycle":
        data.seatHeight = vehicle.getSeatHeight();
        break;
    }

    render(data);
  });
}
