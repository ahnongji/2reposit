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
prinFruitArr(['banana', 2000]);

function printFruitObj(obj){
    console.log(obj.name+'은 '+obj.price);
}
printFruitObj({name:'apple', price:3000});
