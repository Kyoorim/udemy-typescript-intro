// Primitives : numbers, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number; // not "Number"
age = 12;

let userName: string | string[]; // not "String"
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

//More Complex types

let hobbies: string[]; // 문자열 배열타입
hobbies = ["sport", "cooking"];

type Person = {
  name: string;
  age: number;
}; // JS에는 존재하지 않기때문에 컴파일하면 사라질 코드..

let person: Person;

person = {
  name: "Max",
  age: 32,
};
// person= {
//     isEmployee: true,
// }

let people: Person[];

// let people: {
//   name: string;
//   age: number;
// }[]; // 배열 안에 객체 저장

// Type inference

let course = "React - The Complete Guide";
// course = 1234 // error

// 타입을 한 개 이상 지정해줘야 할 경우 : string + number => union타입

let course: string | number;
course = 1234;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
