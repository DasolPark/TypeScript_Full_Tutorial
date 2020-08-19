var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// 큰 프로젝트에서 굉장히 흔하게 사용하는 방법
// void로 반환되는 것 같지만, 사실 반환 type은 never
function generateError(message, code) {
    // throw { message: message, errorCode: code };
    while (true) { }
}
generateError('An error occurred!', 500);
