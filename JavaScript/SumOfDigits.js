// SumOfDigits.js
function sumOfdigits(num)
{
    let sum=0
    while(num>0)
    {
        let temp=num%10;
        sum+=temp;
        num=Math.trunc(num/10);
    }
    return sum

}
let result=sumOfdigits(444);
console.log(result);