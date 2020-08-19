let userInput: unknown; // unknown is more restrictive than any
let userName: string;

userInput = 5;
userInput = 'Max';

// 어떤 값이 올 지 예상할 수 없고, 한 번 더 type을 체크할 상황이라면 유용하다
if (typeof userInput === 'string') {
  userName = userInput;
}
