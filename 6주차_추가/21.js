//반복문 while, do while

// while
let i=1;
while(i<10){
    console.log(i);
    i = i+1;    //1~9까지 출력
}

//do while: do문을 일단 실행한 후에 while문의 조건 따짐
let flag = false;
do{
    console.log('do-while');
}while(flag === true);