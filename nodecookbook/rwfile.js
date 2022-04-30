const fs = require('fs');

// to read file
// fs.readFile('main.txt', 'utf-8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// })


// to write a file
// const buf = "Im going to write this text to a file";
// fs.writeFile('main2.txt', buf, err => {
//   if(err) throw err;
//   console.log('wrote text to file');
// })


// to added text in a file
// const buf = "Im going to write this text to a file";
// fs.appendFile('main.txt', buf, err => {
//   if (err) throw err
//   console.log("appended text to file");
// })


// write file and convert encoding, the string to buffer
// const str = "Im going to write text to a file";
// const buf = Buffer.from(str, 'utf-8');
// fs.writeFile('mainbuf.txt', buf, err => {
//   if(err) throw err;
//   console.log('write text to file');
// })


// demonstrating open, read and write
fs.open('newFile.txt', 'a+', (err, fd) => {
  if (err) {
    throw err;
  } else {
    const buf = Buffer.from('The first string\n');
    fs.write(fd, buf, 0, buf.length, 0, (err, written) => {
      if (err) {
        throw err;
      } else {
        const buf2 = Buffer.from('The second string\n');
        fs.write(fd, buf2, 0, buf2.length, buf.length, (err, written2) => {
          if (err) {
            throw err;
          } else {
            const length = written + written2;
            const buf3 = Buffer.alloc(length);
            fs.read(fd, buf3, 0, length, 0, err => {
              if (err) {
                throw err;
              } else {
                console.log(buf3.toString());
              }
            })
          }
        })
      }
    })
  }
})
