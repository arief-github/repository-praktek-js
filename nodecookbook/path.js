const fs = require("fs");
const path = require('path');
const newFilePath = path.join(__dirname, '/cache');

fs.mkdirSync(newFilePath);
