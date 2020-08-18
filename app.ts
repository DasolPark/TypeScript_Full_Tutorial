// const person: {
//   name: string;
//   age: number;
// } = {
// This is just TypeScript's representation of an object type that helps TypeScript understand objects are working with
const person = {
  // This is the better syntax code
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[]; // any[]
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // string이기 때문에 string 관련 메소드 사용 가능
  // console.log(hobby.map()); // !!! ERROR !!!
}
