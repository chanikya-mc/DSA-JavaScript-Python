
function problem(num)
{
    // let min=Math.min(...num)
    // let max=Math.max(...num)
    // // console.log(min,max);
    // for(let i=min;i<=max;i++)
    // {
    //     if(num.indexOf(i)==-1)
    //     {
    //         console.log(i);
    //     }
    // }
    let r=num.reduce((acc,num)=> acc+num)
    console.log(r);
}
let list=[1,5,6,4];
let result=problem(list);
