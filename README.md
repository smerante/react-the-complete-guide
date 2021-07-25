# [react-the-complete-guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

# 1. Getting Started: Javascript refresher

[JSbin](https://jsbin.com/) is a useful tool for quickly writing javascript code

### Javascript refresher 

rest/spred operator:
```js
const numbers = [1,2,3];
const newNumbers = [...numbers,4];

console.warn(numbers);
console.warn(newNumbers);

// Output
[1, 2, 3]
[1, 2, 3, 4]
```

```js
const obj = {hello: 'world', hi: 'bye'};
const newObj = { ...obj, hi: 'hello'};

console.warn(newObj);

// Output
[object Object] {
  hello: "world",
  hi: "hello"
}
```

### Destructuring

Easily extract objects from objects or arrays

```js
const [a,b] = ['Hello', 'world'];
console.warn(a);
console.warn(b);

// Output

"Hello"
"world"
```

```js
const {name, age} = {name: 'Sam', age: 26};
console.warn(name);
console.warn(age);

// Output
"Sam"
26
```

### Referencing Objects

Object references:
```js
const person = {
  name : 'Sam'
};

const newPerson = person;

console.warn(newPerson);

newPerson.name = 'Hello';
console.warn(person);
console.warn(newPerson);

// Output
[object Object] {
  name: "Sam"
}
[object Object] {
  name: "Hello"
}
[object Object] {
  name: "Hello"
}
```

Creating clone of object
```js
const person = {
  name : 'Sam'
};

const newPerson = {...person};

console.warn(newPerson);

newPerson.name = 'Hello';
console.warn(person);
console.warn(newPerson);

// Output
[object Object] {
  name: "Sam"
}
[object Object] {
  name: "Sam"
}
[object Object] {
  name: "Hello"
}
```

```js
const words = ['hello', 'world'];
const newWords = words;

newWords.push('hi');

console.warn('Reference copy');
console.warn(words);
console.warn(newWords);

const people = ['Sam', 'Bob'];
const newPeople = [...people,'George'];

console.warn('\n\n Shallow Copy');
console.warn(people);
console.warn(newPeople);

//Shallow copy
const addresses = [
  {street: 'queen', number: 123},
];
const newAddresses = [...addresses];
newAddresses[0].number = 456;

console.warn('\n\nShallow Copy inner objects are references');
console.warn(addresses);
console.warn(newAddresses);

const weather = [
  {temp: 30, condition: 'rain'}
];

// const newWeather = Array.from(weather) // Still shallow copy
// const newWeather = Array.from([...weather]) // Still shallow copy

const newWeather = Array.from(JSON.parse(JSON.stringify(weather)));
newWeather[0].condition = 'dry';

console.warn('\n\ndeep copy, inner objects are new copies');
console.warn(weather);
console.warn(newWeather);
// Output
"Reference copy"
["hello", "world", "hi"]
["hello", "world", "hi"]
"

 Shallow Copy"
["Sam", "Bob"]
["Sam", "Bob", "George"]
"

Shallow Copy inner objects are references"
[[object Object] {
  number: 456,
  street: "queen"
}]
[[object Object] {
  number: 456,
  street: "queen"
}]
"

deep copy, inner objects are new copies"
[[object Object] {
  condition: "rain",
  temp: 30
}]
[[object Object] {
  condition: "dry",
  temp: 30
}]
```
useful links:
- map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
- filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
- concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
- slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
