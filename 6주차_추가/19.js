//if 조건문
if(10 < 20){
    console.log('10은 20보다 작습니다.');
}

//else는 한 번만
if(20 < 10){                            
    console.log("20은 10보다 작습니다.");
}else{
    console.log("20은 10보다 큽니다.");
}

// else if 사용
if(30 < 10){
    console.log('30은 10보다 작습니다.');
}else if(30 < 20){
    console.log('30은 20보다 작습니다.');
}else if(30 < 30){
    console.log('30은 30보다 작습니다.');
}else if(30 < 40){
    console.log('30은 40보다 작습니다.')
}

//else if 에서도 else는 한 번만
if(30 < 10){
    console.log('30은 10보다 작습니다.');
}else if (30 < 20){
    console.log('30은 20보다 작습니다.');
}else if (30 < 30){
    console.log('30은 30보다 작습니다.');
}else{
    console.log("모든 if 문의 조건이 거짓입니다.");
}