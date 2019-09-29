// comment

/**
 * comment
 * 
 * 
 * 
 */

const BIG_NUMBER = Infinity;

const constObject = {
    a: 1,
    b: 2
};

console.log(constObject.a);

constObject.a = 3;

console.log(constObject.a);

let a = 'a';
console.log(a);
a = 3;
console.log(a);
a = function () {
    return 3;
}

console.log(a.toString());

func('a', 3, 4);

function func(a, b, c) {
    console.log(a + b + c);
}

let f = () => {

};

let obj = {
    a: 1,
    b: 'a',
    c: true
};

func(obj.a, obj.b, obj.c);

console.log(1 == 2);
console.log(1 == '1');
console.log(1 === '1');

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}