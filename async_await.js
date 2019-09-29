const fse = require('fs-extra');

let v1, v2, v3

async function read(path) {
    return fse.readFile(path);
}

async function main() {
    try {
        v1 = await read('./a.txt');
        v2 = await read('./b.txt');
        v3 = await read('./c.txt');
        console.log(v1 + v2 + v3);
    }
    catch (err) {
        console.log(err);
    }
}

main();