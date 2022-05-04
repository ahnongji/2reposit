//비교 연산자
//////////////////////////////////////
let comparison1 = 10 == 10;  //동등(==)

let comparison2 = 10 === 10; //일치(===)

let comparison3 = 10 != 10;  //부등(!=)

let comparison4 = 10 !== 10; //불일치(!==)

let comparison5 = 20 > 20;   //~ 보다 큰(>)

let comparison6 = 20 >= 20;  //~ 보다 크거나 같다(>=)

let comparison7 = 20 < 20;   //~ 보다 작다(<=)

let comparison8 = 20 <= 20;  //~ 보다 작거나 같다(<=)

////////////////////////////////////////////////////////
// 동등/부등 <-> 일치/불일치

let comparison11 = 10 == "10";  //문자열 10을 숫자형 10으로 변환시킨 후에 비교 -> true

let comparison22 = 10 === "10"; // 자료형까지 엄격하게 비교 -> false

let comparison33 = 10 != "10";  //문자열 10을 숫자형 10으로 변환시킨 후에 비교 ->false

let comparison44 = 10 !== "10"; // 자료형까지 엄격하게 비교 -> true