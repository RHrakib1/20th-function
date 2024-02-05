// 4 number niya miltiplay krte hbe 
function miltinumber(num1, num2, num3, num4) {
    const total = num1 * num2 * num3 * num4;
    return total;
}
const result = miltinumber(5, 2, 4, 3);
console.log(result);


// example start  2---> number even hole 2 diye vag hbe r odd hole 2 diye gun hbe
console.log("example 2 satrat");
function evenodd(num5) {
    if (num5 % 2 == 0) {
        const stor = num5 / 2;
        return stor;
    }
    else {
        const stor2 = num5 * 2;
        return stor2;
    }
}
const storage = evenodd(10);
console.log(storage);




// example 3-------->:average make kora
console.log("example 3 start average make kora");
function averagenum(inputnum) {
    let sum = 0;
    for (let more of inputnum) {
        sum = sum + more;
    }
    return sum / inputnum.length
}
const result2 = [2, 4, 11, 9, 10, 15]
const averageresult = averagenum(result2);
console.log(averageresult);






// example 5
console.log("example 5 start");
function odd_even(number0) {
    if (number0 % 2 === 0) {
        return "even"
    }
    else{
        return "odd"
    }
}
const rahman = (1);
const surch = odd_even(rahman);
console.log(surch);