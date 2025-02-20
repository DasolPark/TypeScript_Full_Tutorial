// const person: {
//   name: string;
//   age: number;
// } = {
// This is just TypeScript's representation of an object type that helps TypeScript understand objects are working with
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin'); // 여기서는 개수를 잡아내지 못 한다(주의)
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']; // 여기서는 개수를 잡아낸다

let favoriteActivities: string[]; // any[]는 Vanilla JS에서도 사용 가능하며, 추천하지 않는다.
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // string이기 때문에 string 관련 메소드 사용 가능
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
