const sum = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const myForEach = (items, callback) => {
	// it was this...
	// for (let index = 0; index < items.length; index++) {
	// 	callback(items[index]);
	// }

	// now refactor that code
	items.forEach((v, i) => {
		//callback(i + 1);		// would raise an error!
		callback(i);
	});
};

const myFilter = x => x < 10;
const myDouble = x => x * 2;

const filterMyList = (items) => items.filter(myFilter);
const doubleMyList = (items) => items.map(myDouble);

export { sum, subtract, myForEach, doubleMyList, filterMyList };