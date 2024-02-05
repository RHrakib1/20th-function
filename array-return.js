// array er modhe sum ber korar niyom

function sumOfArry(number) {
    let sum = 0;
    for (const add of number) {
        console.log(add)
        sum = sum + add;
    }
    return sum;
}
const someNum = [10, 50, 40];
const total = sumOfArry(someNum);
console.log("the number is :", total);




// example for 2------> 
// only even number sum
function evenSum(number2) {
    let sum = 0;
    for (const evennumber of number2) {
        console.log(evennumber);
        if (evennumber % 2 === 0) {
            sum = sum + evennumber;
        }
    }
    return sum;
}
const numbs = [2, 4, 5, 9, 7, 10, 11, 15, 14];
const net = evenSum(numbs);
console.log("the even number is sum of :", net);




// example 3 start for--------> : akti arry er vitor theke even number neoya
function oddnumber(numbersss){
    const odd=[];
    for(const nus of numbersss){
        console.log(nus);
        if(nus%2===1){
            console.log(nus);
            odd.push(nus)
        }
    }
    return odd;
}
const oddnum=[1, 20, 55, 40, 6, 7, 9,19];
const oddtotal=oddnumber(oddnum);
console.log(oddtotal);