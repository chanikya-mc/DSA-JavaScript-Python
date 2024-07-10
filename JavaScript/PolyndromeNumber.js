
function problem(num) {
    // let num1 = num;
    // let reversenumber = 0
    // while (num > 0) {
    //     let temp = num % 10;
    //     reversenumber = reversenumber * 10 + temp;
    //     num = Math.trunc(num / 10);
    // }
    // if (num1 == reversenumber) {
    //     return "polyndrome"
    // }
    // else {
    //     return "not a polindrome"
    // }

    // other method
    let s=String(num).split("").reverse().join("");
    if(Number(s)==num)
    {
        return "polyndrome"
    }
    else
    {
        return "not a polyndromme"
    }
}
let result = problem(112);
console.log(result);