//import fs from 'fs';
import sep from './_utils';
let context = "generators";

export default () => {
    console.log("**** start of generator tests ****");
    sep(context, "test 1", test1);
    sep(context, "test 2", test2);
    sep(context, "test 3", test3);
    sep(context, "test 4", test4);
    sep(context, "test 5", test5);

    //console.log("data: ", data);
};

function* genFunc1() {
    yield 'a';
    yield 'b';
}

let test1 = () => {
    //sep(context, "test 1");

    let iterable = genFunc1();

    // -------------
    // the iterable implements the 'iteration protocol' (.next returns value: 'a' and done: false)
    // -------------

    console.log([...iterable]);

    for (const x of genFunc1())
        console.log(x);     // a and b

    for (const x in genFunc1())
        console.log(x);     // _invoke, constructore, next, throw, etc..
};

// -----------------

let location = 0;

function* genFunc2() {
    location = 1;
    yield 'a';
    location = 2;
    yield 'b';
    location = 3;
}

let test2 = () => {
    let iterable = genFunc2();
    // at this point NOTHING has happened yet (location is still 0)
    console.log("location: " + location);
    let res = iterable.next();
    console.log("location: " + location, res);  // no location is 1 and iterable is paused
    res = iterable.next();
    console.log("location: " + location, res);
    res = iterable.next();
    console.log("location: " + location, res);
};

// -----------------

let test3 = () => {
    // get a publicly known Symbol to get hold of the iterator
    let iterable = "marcel"[Symbol.iterator]();
    for (const a of iterable)
        console.log(a);

    // reset the iterable
    iterable = "marcel"[Symbol.iterator]();
    let res = iterable.next();
    console.log(res);       // {value: "m", done: false}
    res = iterable.next();
    console.log(res);       // {value: "a", done: false}
};

// -----------------

let test4 = () => {
    // get a publicly known Symbol to get hold of the iterator
    let iterable = genFunc2()[Symbol.iterator]();   // bit silly genFunc2 already returns the iterator
    let res = iterable.next();
    console.log(res);       // {value: "a", done: false}
    res = iterable.next();
    console.log(res);       // {value: "b", done: false}
    res = iterable.next();
    console.log(res);       // {value: undefined, done: true}
};

// -----------------

let test5 = () => {
    // ** this results in an error - a standard object has no iterable
    //let iterable = { name: 'marcel', age: 52 }[Symbol.iterator]();

    // 
    let obj = { name: 'marcel', age: 52 };

    // get the keys (as an array)
    let keys = Object.keys(obj);
    console.log(keys);                  // ["name", "age"]

    // get the values (as an array)
    let values = Object.values(obj);
    console.log("values: ", values);    // ["marcel", 52]

    let iterable = keys[Symbol.iterator]();
    let res = iterable.next();
    console.log(res);                   // {value: "name", done: false}

    for (const x in obj)
        console.log("x: " + x);         // x: name   |   x: age

};
