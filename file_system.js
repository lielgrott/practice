const fs = require('fs');

// fs.writeFile('./bla.txt', 'hello', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('done');
//     }
// });

let val;

fs.readFile('./bla.txt', (err, res) => {
    if (err) {
        return console.log(JSON.stringify(err));
    }
    val = res.toString();
    console.log(val);
});

console.log(val);