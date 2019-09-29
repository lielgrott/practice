const fse = require('fs-extra');

function prePlan(cb) {
    fse.writeFile('./a.txt', 1, (err) => {
        if (err) {
            console.log(err);
            return cb(err);
        }
        fse.writeFile('./b.txt', 2, (err) => {
            if (err) {
                console.log(err);
                return cb(err);
            }
            fse.writeFile('./c.txt', 3, (err) => {
                if (err) {
                    console.log(err);
                    return cb(err);
                }
                return cb();
            })
        });
    });
}

prePlan((err) => {
    if (err) {
        console.log(err);
        return;
    }
    fse.readFile('./a.txt', (err, val1) => {
        if (err) {
            console.log(err);
            return;
        }
        fse.readFile('./b.txt', (err, val2) => {
            if (err) {
                console.log(err);
                return;
            }
            fse.readFile('./c.txt', (err, val3) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(val1 + val2 + val3);
            });
        });
    });
});