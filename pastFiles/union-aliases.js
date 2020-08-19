"use strict";
function combine(input1, input2, resultConversion // or string
// 위와 같이 한 경우 parameter를 보낼 때 typo가 생기면 오류가 발생
) {
    let result;
    // Extra runtime check
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result; // parseFloat();
    // } else {
    //   return result.toString();
    // }
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
