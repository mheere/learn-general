import { sum, subtract, myForEach, doubleMyList, filterMyList } from '../../myTests/jest/sum';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('subtract 5 - 2 = 3', () => {
	expect(subtract(5, 2)).toBe(3);
});


// *** Mocking a function (tests small functions we have written elsewhere)
test("function check - myForEach", () => {
	const mockCallback = jest.fn(x => 40 + x);
	myForEach([0, 1, 2], mockCallback);

	// The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(3);

	// The first argument of the first call to the function was 0
	expect(mockCallback.mock.calls[0][0]).toBe(0);

	// The first argument of the second call to the function was 1
	expect(mockCallback.mock.calls[2][0]).toBe(2);

	// The return value of the first call to the function was 42
	expect(mockCallback.mock.results[2].value).toBe(42);
});


// *** Mocking a property
// ?


// *** standard testing
test('filter my list', () => {
	const list = [3, 7, 10, 15];
	expect(filterMyList(list).length).toBe(2);
	expect(filterMyList(list)).toStrictEqual([3, 7]);
});

test('double my list', () => {
	const list = [3, 7, 10, 15];
	expect(doubleMyList(list).length).toBe(4);
	expect(doubleMyList(list)).toStrictEqual([6, 14, 20, 30]);
});


// *** Mocking Return Values
test('fdfdfd', () => {
	// specify the return value
	const myMock = jest.fn();
	myMock.mockReturnValue([6, 14, 20, 30]);

	const list = [3, 7, 10, 15];
	expect(myMock(list)).toStrictEqual([6, 14, 20, 30]);

});

