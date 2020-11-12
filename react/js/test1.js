import React from 'react'

class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

//debugger;

let obj = new Animal();
obj.speak(); // the Animal object (instance)
let speak = obj.speak;
speak(); // undefined  (this is Global Window)

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined (this is Global Window)

// -----------------------

// memoize kind of thing... - pretty cool - works well :)

function expensiveFunction(a) {
    expensiveFunction.cache = expensiveFunction.cache || {}
    if (expensiveFunction.cache[a]) {
        return expensiveFunction.cache[a]
    }
    //waitSync(4000) // runs long time
    return expensiveFunction.cache[a] = a * 34;
}

console.log(expensiveFunction(5));
console.log(expensiveFunction(5));
console.log(expensiveFunction(5));
console.log(expensiveFunction(6));
console.log(expensiveFunction(6));

// ------------------------

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);

// ------------------------
