/**
 * -----------------function structure------------
//  *           function declear kora
 * function khelteJbo(){
 *            console.log("ghor theke bahir hou")
 *            console.log("sobaui k dako")
 *            console.log("hete hete mathe jao")
 * }
 * 
 * 
 *               function call kora
 * kelteJbo();
 */
// function declear
function khelteJbo() {
    console.log("ghor theke bahir hou");
    console.log("sobaui k dako");
    console.log("hete hete mathe jao");
}
//function call
khelteJbo();




// examle 2
console.log("example 2");
function gosolKrbo() {
    console.log("bathroom a jabo");
    console.log("pani sorir a dibo");
    console.log("saban dibo");
    console.log("sorir muche bathroom theke jabo");
}
gosolKrbo();



// gun korar niyom
// bastob example 
function square(number) {
    console.log("this is a numnber :", number)
    const multi = number * number;
    console.log("this is a multification :", multi)
}
square(5);
console.log("--------------");
square(8);
square(6);
const numbers = 55;
square(numbers);
const hala = 80;
square(hala);



// example fot add 
function add(num1, num2, num3) {
    const total = num1 + num2 + num3;
    console.log("the sum  is :", total);

}
add(5, 10, 14);
add(5, 111, 14);



// exapmle 4 function call korar somoy variable a kono number k add kore call kora  jabe
// functio k valu pathano hole seta k arrguments bola hoi
// biyog kora 
function differance(num1, num2) {
    const differ = num1 - num2;
    console.log(num1, num2, "the defferance is a :", differ);

} 
const myAge=20;
const myFatherAge=50;
// akhane kono variable dite pari ba value o dite pari sora sori
differance(myFatherAge, myAge );

