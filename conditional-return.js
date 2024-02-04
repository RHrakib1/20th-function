//condition dekhe return output dibe
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const netEven = isEven(10);
console.log(netEven);

const netEven2 = isEven(15);
console.log(netEven2);





// example conditional onno vabe dekhano jai else sara
console.log("example else sara");
function isOdd(number1) {
    if (number1 % 2 === 1){
        return true;
    }
    return false;
}
console.log("the number is", isOdd(13));
console.log("the number is", isOdd(14));
