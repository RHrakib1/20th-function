// return use krle function declear er okhane kono console.log use hoi na call er okhane hoi
// return korar nitom
function multiTen(number) {
    const multi = number * 10;
    return multi;
}
multiTen(6);
const multiResult = multiTen(6);
console.log(multiResult);





console.log("example 2 ");
// exaple 2
function divaid(nums) {
    const divResult = nums / 2;
    return divResult;
}
divaid(100);
const divoutput = divaid(100);
console.log(divoutput);



// example 3 return start short vabe return use kora
console.log("return 3 exaplme start");
function hottlePrice(price1, price2) {
    const total = price1 + price2;
    return total;
}
const netTotal = hottlePrice(10, 90);
console.log(netTotal);

// example short cut return make kora
console.log("example short cut return make kora");
function rakib(n, n1, n2) {
    // const hasan = n + n1 + n2;
    // return hasan;
    // sudhu akhane variable declear kora hoi ni
    return n + n1 + n2;
}
const fullname = rakib(5, 10, 90);
console.log(fullname);



// example this calculation
console.log("something calculation that");
function someCalculation(numbers1, numbers2) {
    const sum = numbers1 + numbers2;
    const differance = numbers1 - numbers2;
    const mult = sum * differance;
    const result = mult / 2;
    return result;
}
const calculationD = someCalculation(40, 35);
console.log(calculationD);