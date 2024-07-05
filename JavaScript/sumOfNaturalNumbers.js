function sumofnatutalnumbers(num)
{
    let sum=0
    for(let i=1;i<=num;i++)
    {
        sum+=i
    }
    return sum
}
let result=sumofnatutalnumbers(20);
console.log(result);