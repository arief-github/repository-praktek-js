// Timers
// code from professional Javascript
// function double(value){
//   setTimeout(() => setTimeout(console.log, 0, value*2),3000);
// }

// console.log(double(3));

// Events
// Network Events
// Make a scripted HTTP requesr to backend version API
// function getCurrentVersionNumber(versionCallback){
//   let request = new XMLHttpRequest();
//   request.open('GET','http://www.example.com/api/version')
//   request.send();
//   request.onload = () => {
//     if(request.status === 200){
//       let currentVersion = parseFloat(request, responseText);
//       versionCallback(null, currentVersion);
//     }else{
//       versionCallback(response.statusText, null);
//     }
//   };
//   request.onerror = request.ontimeout = e => {
//     versionCallback(e.type, null);
//   }
// }


// Callback Hell
function loadScript(src, callback){
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}
