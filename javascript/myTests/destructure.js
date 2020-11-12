import sep from './_utils';
let context = "destructure";

export default () => {
    console.log("**** start of destructure tests ****");
    sep(context, "test1", test1);
    sep(context, "arr_test", arr_test);
    sep(context, "swap a with b:", swap);
    sep(context, "obj", obj);
};

let test1 = () => {
    let s = "marcel";
    let [a, _, b] = s;
    console.log("destructure: ", a, b);
}

let arr_test = () => {
    let x = 3;
    let y = 7;
    let arr = [x, y];
    let [c, d] = arr;
    console.log("d = ", d);
}

let swap = () => {
    let x = 3;
    let y = 7;
    console.log("x and y are: ", x, y);
    [x, y] = [y, x];
    console.log("x and y are now: ", x, y);
}

let obj = () => {
    let obj = {
        a: 'marcel',
        b: 'heeremans'
    }
    let { b } = obj;
    testA('m', b, 28, 'rrr', 'haarlem');
}

function testA(a, b, ...etc) {
    console.log("b: ", b);
    console.log("etc: ", etc);
}