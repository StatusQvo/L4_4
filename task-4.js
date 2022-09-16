// 1  | 12345       | NaN
console.log(Number(' 1 2 3 4 5'))
// 2  | 12345       | NaN
console.log(Number('1234 5'))
// 3  | 12345       | 12345        | Right
console.log(Number('12345'))
// 4  | 'false'     | 'false'      | Right
console.log(String(false))
// 5  | true        | false
console.log(Boolean(0000000))
// 6  | true        | true         | Right
console.log(Boolean(0.0000001))
// 7  | 'undefined' | undefined    | Right
console.log(String(undefined))
// 8  | NaN         | NaN          | Right
console.log(Number('100f'))
// 9  | 100         | 100          | Right
console.log(Number('100'))
// 10 | 1           | 1            | Right
console.log(Number('000001'))
