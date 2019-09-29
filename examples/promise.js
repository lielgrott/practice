const fse = require('fs-extra');


let v1, v2, v3
fse.readFile('./a.txt')
    .then((val1) => {
        v1 = val1;
        return fse.readFile('./b.txt');
    })
    .then((val2) => {
        v2 = val2;
        return fse.readFile('./c.txt');
    })
    .then((val3) => {
        v3 = val3;
        console.log(v1 + v2 + v3);
    })
    .catch((err) => {
        console.log(err);
    });