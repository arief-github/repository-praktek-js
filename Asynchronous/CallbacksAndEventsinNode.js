const fs = require("fs");
const https = require("https");
let options = {

}
// Node’s fs.readFile() function takes a two-parameter callback as its last argument. It
//reads the specified file asynchronously and then invokes the callback.
fs.readFile("config.txt", "utf-8", (err, next) => {
  if(err){
    console.log("Couldnt read config file:",err);
  }else{
    Object.assign(options, JSON.parse(text));
  }
  startProgram(options);
})



function getText(url, callback) {
// start an HTTP GET request for the URL
  request = https.get(url);
// register a function to handle the response event
  request.on("response", response => {
    let httpStatus = response.statusCode;
    response.setEncoding("utf-8");
    let body = "";
    response.on("data", chunk => {body += chunk;});
    response.on("end", () => {
      if(httpStatus === 200){
        callback(null, body);
      }else{
        callback(httpStatus, null);
      }
    })
  })
  request.on("error", err => {
    callback(err, null);
  })
}
