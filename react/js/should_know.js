class Person {
    name = "";     // public prop - initialise here so we could do without a constructor to initialise
    age;          // public prop

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

debugger;

// 1. Create an array of Person objects (10 items)
let arr = Array.from(Array(10), (x, index) => new Person("marcel", index + 10));

// 2. DEEP Clone this array
let arrDeepClone = JSON.parse(JSON.stringify(arr));

// 3. Copy the array
let arrClone = arr.slice(0);

// 4. Remove item 3 and 4
let deletedItems = arr.splice(3, 2);

// 5. Find and remove a specific item
let matchIndex = arr.findIndex(item => item.age === 17);
arr.splice(matchIndex, 1);

// 6. Create a new item and insert it at position 5
arr.splice(5, 0, new Person("deniz", 20));

// 7. Insert a new item at the start
arr.unshift(new Person("start", 30));

// 8. Insert a new item at the end
arr.push(new Person("end", 30));

// 9. Removes an item from the start
let firstItem = arr.shift();

// 10. Removes an item from the end
let lastItem = arr.pop();

// 11. Merge three objects into a new object
let obj1 = { last: 'heeremans' };
let obj2 = { first: 'marcel' };
let obj3 = { age: 52 };
let obj = { ...obj1, ...obj2, ...obj3 };

// 12. does an obj have a prop 'first'?
let hasProp = 'first' in obj;

// 13. Iterate through all props of an object
Object.entries(obj).forEach((item) => {
    console.log(item[0], item[1]);
})


// const filteredUsers = users.filter((user) => {
//     return user.name.toLowerCase().includes(search.toLowerCase());
// });
