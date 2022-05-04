//switch 조건문

/////////////////////////
switch (key) {
    case value1:
        break;

    case value2:
        break;

    case value3:
        break;
    default:  // 생략 가능
        break;
}

///////////////////////
let animal = 'Dog';

switch (animal) {
    case 'Cat':
        console.log("야옹");
        break;
    case 'Dog':                         // 멍멍만 실행됨
        console.log("멍멍");
        break;
    case 'Cow':
        console.log("음메");
        break;
    default:
        console.log("일치하는 동물 소리가 없습니다.");
        break;
}

/////////////////////// 
//코드는 break문을 만날 때까지 실행됨.
let animal1 = 'Cat';

switch (animal) {
    case 'Cat':
        console.log("야옹");
    case 'Dog':                         // 야옹, 멍멍, 음메가 실행됨
        console.log("멍멍");
    case 'Cow':
        console.log("음메");
    default:
        console.log("일치하는 동물 소리가 없습니다.");
        break;
}