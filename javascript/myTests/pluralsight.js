import sep from './_utils';
let context = "destructure";

export default () => {
	console.log("**** start of pluralsight tests ****");
	sep(context, "test1", test1);
};

let test1 = () => {
	function list() {
		return [].slice.call(arguments);
	}
	var leadingThirtysevenList = list.bind(null, 37);
	var list2 = leadingThirtysevenList();
	console.log(list2);

	// options:  undefined | null | [37] | []     - ansert is [37]
};


// By definition, NaN is the return value from operations which have an undefined numerical result. 
// Hence why, in JavaScript, aside from being part of the global object, it is also part of the Number object: Number. NaN. 
// It is still a numeric data type , but it is undefined as a real number



// const person = {
// 	isHuman: false,
// 	printIntroduction: function () {
// 		console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// 	}
// };

// const me = Object.create(person);

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();
// // expected output: "My name is Matthew. Am I human? true"

