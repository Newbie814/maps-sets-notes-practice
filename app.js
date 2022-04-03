//  =============== sets ===================================

// store nested data of any kind and length

// iterable with additional set methods available

// order not guaranteed. duplicates not allowed. no index based acceptsCharsets.
// great for storing unique ids, etc

// const ids = new Set()  //empty set

// can pass any iterable as argument

// const ids = new Set([1, 2, 3, 4, 5]);
// console.log(ids);

// Set(5) {1, 2, 3, 4, 5}

// check to see if contains.
// console.log(ids.has(1));
// true;
// add to set
// console.log(ids.add(6)); //but set can only have unique values. If I added '3' again, it would still only have one instance in the set.

// .delete(1) would delete the value.

// Set(6) {1, 2, 3, 4, 5, …}
// [[Entries]]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// size: 6
// [[Prototype]]: Set

// .entries() returns an iterable
// console.log(ids.entries());

// SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5, …}
// [[Entries]]
// 0: {1 => 1}
// 1: {2 => 2}
// 2: {3 => 3}
// 3: {4 => 4}
// 4: {5 => 5}
// 5: {6 => 6}
// [[Prototype]]: Set Iterator
// [[IteratorHasMore]]: true
// [[IteratorIndex]]: 0
// [[IteratorKind]]: "entries"

// for (const entry of ids.entries()) {
//   console.log(entry);
// }

// each value is returned with duplicate values of each element
// (2) [1, 1]0: 11: 1length: 2[[Prototype]]: Array(0)
// app.js:53 (2) [2, 2]0: 21: 2length: 2[[Prototype]]: Array(0)
// app.js:53 (2) [3, 3]
// app.js:53 (2) [4, 4]
// app.js:53 (2) [5, 5]
// app.js:53 (2) [6, 6]

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }
// returns:
// 1
// 2
// 3
// 4
// 5
// 6
//

// // ======================== maps ================================

// store key value data of any type and length, any key values are allowed

// iterable with special map methods

// order guaranteed. duplicate keys not allowed. key based access

// const person1 = { name: 'Matt' };
// const person2 = { name: 'Sandra' };

// const personData = new Map([['key', 'someValue']])
// when i want to add data the above object, but i don't want to actually change that object at that variable. For the 'key' parameter i would out the key I wanted to add data to.

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// console.log(personData);

// [[Entries]]
//  0: {Object => Array(1)}
//    key: {name: 'Matt'}
//    value: Array(1)
//     0:
//       date: "yesterday"
//       price: 10
//             [[Prototype]]: Object
//             constructor: ƒ Object()
//             hasOwnProperty: ƒ hasOwnProperty()
//             isPrototypeOf: ƒ isPrototypeOf()
//             propertyIsEnumerable: ƒ propertyIsEnumerable()
//             toLocaleString: ƒ toLocaleString()
//             toString: ƒ toString()
//             valueOf: ƒ valueOf()
//             __defineGetter__: ƒ __defineGetter__()
//             __defineSetter__: ƒ __defineSetter__()
//             __lookupGetter__: ƒ __lookupGetter__()
//             __lookupSetter__: ƒ __lookupSetter__()
//             __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
// length: 1
// [[Prototype]]: Array(0)
// size: 1
// [[Prototype]]: Map

// the object in person1 becomes the 'key' in the new 'key value pair'

// like:
// {name: 'Matt'}: [{date: 'yesterday', price: 10}]
//   key     value      k       v          k     v
// | __________ |       | _________________________ |
//     key (map)               value(map)

const person1 = { name: 'Matt' };
const person2 = { name: 'Sandra' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// console.log(personData);
// console.log(personData.get(person1)); //returns just the value of mapped key object pair

// add data to a map
// .set(key, value)

personData.set(person2, [{ date: 'today', price: 20 }]);

// console.log(personData);
// console.log(personData.get(person2));

// for (const entry of personData.entries()) {
//   console.log(entry);
// } // returns  an array that has all of person1 in an element and all of person2 in an element

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

//  returns with person1 separated with 'key' object and 'value' object in an element and person2 separated with 'key' object and 'value' object in an element

// for (const key of personData.keys()) {
//   console.log(key);
// }
// returns just the key object
// for (const values of personData.values()) {
//   console.log(values);
// }

// .clear() clears all data from Map
// .delete() deletes a single item

// console.log(personData.size); //returns the size of the map
