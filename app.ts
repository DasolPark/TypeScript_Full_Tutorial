const person: {
  name: string;
  age: number;
} = {
  // This is just TypeScript's representation of an object type that helps TypeScript understand objects are working with
  // const person = { // This is the better syntax code
  name: 'Maximilian',
  age: 30,
};

console.log(person.name);
