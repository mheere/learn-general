
// 1. Replace All

var example = "potato potato";
console.log(example.replace(/pot/, "tom"));
// "tomato potato"
console.log(example.replace(/pot/g, "tom"));
// "tomato tomato"


// 2. Unique values
var entries = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 4, 2, 1]
var unique_entries = [...new Set(entries)];
console.log(unique_entries);
// [1, 2, 3, 4, 5, 6, 7, 8]


// 3. Convert number to string
var converted_number = 5 + "";
console.log(converted_number);
// 5
console.log(typeof converted_number);
// string


// 4. Convert String to Number
the_string = "123";
console.log(+the_string);
// 123
the_string = "hello";
console.log(+the_string);
// NaN


// 5. Shuffle elements from array
var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(my_list.sort(function () {
    return Math.random() - 0.5
}));
// [4, 8, 2, 9, 1, 3, 6, 5, 7]


// 6. Flatten multideminsional array
var entries = [1, [2, 5], [6, 7], 9];
var flat_entries = [].concat(...entries);
// [1, 2, 5, 6, 7, 9]


// 7. Short circuit conditionals
if (available) {
    addToCart();
}
// to..
available && addToCart()


// 8. Dynamic property names
const dynamic = 'flavour';
var item = {
    name: 'Coke',
    [dynamic]: 'Cherry'
}
console.log(item);
// { name: "Coke", flavour: "Cherry" }


// 9. Use length to change size of an array
var entries = [1, 2, 3, 4, 5, 6, 7];
console.log(entries.length);
// 7  
entries.length = 4;
console.log(entries.length);
// 4  
console.log(entries);
// [1, 2, 3, 4]

// to empty an array...

var entries = [1, 2, 3, 4, 5, 6, 7];
console.log(entries.length);
// 7  
entries.length = 0;
console.log(entries.length);
// 0 
console.log(entries);
// []
