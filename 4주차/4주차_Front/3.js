var num = 3; #중복선언 가능->비추
console.log(num);

let str = "a"; #중복선언 불가능/ 변수의 데이터 값 변경 가능 =>변수 선언
console.log(str);

const constant = 3; #중복선언불가능/ 변수의 데이터 값 변경 불가능 => 상수 선언
console.log(constant);

#변수명은 카멜케이스 방법으로 작성:전체 단어의 첫글자는 소문자 연결된 단어의 첫글자는 대문자
#변수명은 _, $, 문자로만 시작
#상수나 축약어는 대문자와 스네이크케이스 방식(단어와 단어를 언더바로 연결)으로 작성
#예약어를 변수명으로 사용 불가