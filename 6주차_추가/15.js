//화살표함수

//일반함수, 식별자 있음
function sum(num1,numw){
    return num1+num2;
}



//화살표함수, 식별자 없음(함수표현식 방법처럼 변수에 함수를 할당해줘야 함)
const sum = (num1,num2) => {
    return num1+num2;
}
const sum1 = (num1,num2) => num1+num2 // 더 간단한 코드(중괄호, 리턴 삭제)

const pow = x => x*x;                 // 매개변수가 1개인 경우 소괄호 생략 가능
const printPie = () => 3.14;          // 매개변수가 없는 경우 소괄호만 적기

const getObject = () => {             // 내부적으로 객체를 반환하는 경우
    return{                           
        name:"철수",
        age:20
    }
}
const getObject1 = () => ({           // 내부적으로 객체를 반환하는 경우, 더 간단한 코드 (중괄호, 리턴 삭제) 
        name:"철수",                  // 함수의 중괄호와 리턴을 제거할 때, 리턴의 중괄호가 함수의 중괄호처럼 인식될 수 있어서 소괄호로 감싸기
        age:20
    })

//화살표 함수의 내부 함수 or 내부 화살표 함수
const outer = (x) => function inner(){
    return x*x;
}
const outer1 = (x) => () => x*x ;
