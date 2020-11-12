
export default () => {
    console.log("**** start of destructure tests ****");
    test1();
    // arr_test();
    // swap();
    // obj();
}

let test1 = () => {
    let s = "marcel";
    let [a, _, b] = s;
    console.log("destructure: ", a, b);
}

let arr_test = () => {
    console.log("arr_test:");
    let x = 3;
    let y = 7;
    let arr = [x, y];
    let [c, d] = arr;
    console.log("d = ", d);
}

let swap = () => {
    console.log("swap a with b:");
    let x = 3;
    let y = 7;
    [x, y] = [y, x];
    console.log("x and y are now: ", x, y);
}

let obj = () => {
    let obj = {
        a: 'marcel',
        b: 'heeremans'
    }
    let { b } = obj;
    //testA('m', 'h', 28, 'rrr', 'haarlem');
}

// function testA(a, b, ...etc) {
//     console.log("b: ", b);
//     console.log("etc: ", etc);
// }