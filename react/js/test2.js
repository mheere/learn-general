class Animal {
    #var1 = 'my internal var';      // real private prop!  (can't see it from outside AT ALL)
    height = 0;     // public prop - initialise here so we could do without a constructor to initialise
    width;          // public prop
    #isRunning = false;

    constructor(name) {
        this.name = name;   // the conventional way of creating a prop
        this.width = 100;   // initialise the width prop
    }

    Run = function () { this.#isRunning = true; }   // old hat syntax - but works
    get IsRunning() { return this.#isRunning; }
    SetAge(age) { this.age = age; }         // a method setting the age
    get MyMessage() { return this.#var1; }  // a class propety (but I can call methods, etc...)

    static #planet = "Earth";               // it compiles - but pointless because we can't get to it..
    static get MyPlanet() { return planet; }    // this returns undefined (unless set from outside)

    static DisplayName = "Animal";
    static get MyDisplayName() { return Animal.DisplayName; }  // works but why not just call this directly...
}

//debugger;

let obj = new Animal('dog');
let height = obj.height;
let name = obj.name;
obj.SetAge(5);
let age = obj.age;          // now I can see 'age' in the debugger
let msg = obj.MyMessage;    // 

Animal.planet = "Mars";
let myPlanet = Animal.MyPlanet;
let planet = Animal.planet;
let displayName = Animal.DisplayName;
displayName = Animal.MyDisplayName;

let run = obj.Run;
run.bind(obj)();                // this works
run();                          // attempted to set private field on non-instance
console.log(obj.IsRunning);

