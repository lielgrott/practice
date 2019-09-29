function asyncFunc(cb) {
    setTimeout(() => {
        cb(3);
    }, 1000);
}

console.log('before');
asyncFunc(function (val) {
    console.log(val);
});
console.log('after');