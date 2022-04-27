function printBanana(){
    console.log('banana');
}
function printApple(){
    console.log('apple');
}
printBanana();
printApple();

function printFruit(name){
    console.log(name);
}
printFruit('banana');
printFruit('apple');

function printFruits(name, price){
    console.log(name+'는 '+price+'원 입니다.');
}
printFruits('banana', 2000);

function printFruitArr(arr){
    console.log(arr[0]+'은 '+arr[1]);
}
prinFruittArr(['banana', 2000]);

function printObj(obj){
    console.log(obj.name+'은 '+obj.price);
}
printObj({name:'apple', price:3000});
