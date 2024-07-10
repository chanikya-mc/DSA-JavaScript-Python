
// function problem(num)
// {


// }
// let result=problem(23456);
// console.log(result);

function problem(num) {
    if (num < 2) {
        return num
    }
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i <num; i++) {
        c = a + b;
        console.log(c);
        b = c;
        a = b;
    }

}
let result = problem(10);
// console.log(result);