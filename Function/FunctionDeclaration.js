// function declaration
function printprops(value){
  for(let print in value) console.log(`${print}: ${value[print]}\n`);
}

function distance(x1, y1, x2, y2){
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}

// recursive function : function call itself
function factorial(x){
  if(x <= 1) return 1;
  return x * factorial(x-1);
}
