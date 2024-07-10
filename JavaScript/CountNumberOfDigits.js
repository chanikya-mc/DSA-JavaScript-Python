
function problem(num)
{
    let digits=0
    while(num>0)
    {
        num=Math.trunc(num/10);
        digits+=1;

    }
    return digits

    // second method
    // let s=String(num)
    // return s.length

}
let result=problem(23456);
console.log(result);