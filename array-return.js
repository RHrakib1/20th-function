// array er modhe sum ber korar niyom
function sumOfArray(number) {
    let sum = 0;
    for (const hasan of number) {
        console.log(hasan)
        sum = sum + hasan;
    }
    return sum;
}
const numbs = [1, 22, 20, 60, 10];
const sum = sumOfArray(numbs);
console.log("sum of number is :", sum);