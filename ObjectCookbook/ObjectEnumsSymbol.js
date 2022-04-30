// create three constants to use as an enum
const trafficLight = {
  Green: Symbol('green'),
  Red: Symbol('red'),
  Yellow: Symbol('yellow')
}

// this function uses the light enum
function switchLight(newLight){
  if(newLight === trafficLight.Green){
    console.log('Turning light green');
  }else if(newLight === trafficLight.Yellow){
    console.log('Get ready to stop');
  }else{
    console.log('Turning light red');
  }
  return newLight;
}

let light = trafficLight.Green;
light = switchLight(trafficLight.Yellow);
light = switchLight(trafficLight.Red);

console.log(light);
