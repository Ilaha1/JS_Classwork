// /Task1

function fun1(num){
    return num? num* fun1(num-1):1
}

console.log(fun1(4));
console.log(fun1(5));
console.log(fun1(0));

// /Task2
function fun2(num){
return num>0 ? num*fun2(num-2):1

}
console.log(fun2(5));
console.log(fun2(9));
console.log(fun2(1));
console.log(fun2(-3));


// /Task3

function sumArray(arr){
    return arr.flat(Infinity).reduce((sum,prev)=>sum+prev,0)


}
console.log(sumArray([4,[2,[1]],8]));

