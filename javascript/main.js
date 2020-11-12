import 'regenerator-runtime/runtime';
import testDestructure from './tests/destructure';
import testGenerators from './tests/generators';

console.log("loading main.js");

let button = document.getElementById('btnStartA');

button.addEventListener('click', event => {
    //console.log("add 5 to 3 should be: " + add5(3));
    console.log("Start testing...");
    doTest();
});

const doTest = function () {
    testDestructure();
    //testGenerators();
};

// straight away - start the tests
doTest();