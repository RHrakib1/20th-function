// kono akta string nibo seta te amra odd even ki na ta dekhte parbo
function evenSize(string) {
    const size = string.length;
    if (size % 2 === 0) {
        console.log('even number')
        return true;
    }
    else {
        console.log('odd number');
        return false;
    }
    console.log(string, size);
}
evenSize('rakib')
evenSize('faka')



// example 2
console.log("example 2 start");
function douleToThirpol(number, doDouble) {
    if (doDouble === true) {
        const multi2 = number * 2;
        return multi2;
    }
    else {
        const thirple = number * 3;
        return thirple;
    }

}
console.log(douleToThirpol(5, true));
console.log(douleToThirpol(7, false));






// example 4-----
console.log("_------------------________----");
function numberElements(numberss) {
    const len = numberss.length;
    return len;
}
const habu = numberElements([1, 32, 84, 6, 745, 5]);
console.log(habu);






