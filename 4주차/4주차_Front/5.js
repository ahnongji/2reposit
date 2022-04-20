let integer = 10; //10진수
let hex = 0xa; //16진수
let binary = 0b1010; //2진수
let octal = 0o12; //8진수

console.log(integer, hex, binary, octal);

let negative = -10; //음의 정수
let indices = 1.0e1; //지수
let double = 10.12; //소수


console.log(negative, indices, double);
//숫자 형태와 상관 없이 전부 10진수로 변환되어 출력 됨

let IsInfinity = 10/0; //Infinity
let IsNot = 10 / "칠"; //NaN
console.log(IsInfinity, IsNot);

let sum = 0.1 + 0.2 ;
console.log(sum); //근사치가 나옴
