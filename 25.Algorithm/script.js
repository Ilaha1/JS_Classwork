// Algorithm

// Task 1
function fun1(arr) {
   return arr.sort((a,b)=>a.name-b.name)
}

console.log(fun1(["may", "april", "september", "august"]));  // ['may', 'april', 'august', 'september']
console.log(fun1(["a", "ccc", "dddd", "bb"]));  //  ['a', 'bb', 'ccc', 'dddd']


// Task 2
function fun2(str) {
let arr=str.split(' ')
    return `${Math.max(...arr)} ${Math.min(...arr)}`

}

console.log(fun2("2 3 4 5 6"));    // '6 2'
console.log(fun2("1 2 -6 4 7"));    // '7 -6'


// Task 3
function fun3(tileHand) {
 let sum=0;
    for (let i = 0; i < tileHand.length;i++){
     sum += tileHand[i].score;
 }
 return sum;

}
console.log(fun3([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
])); // 28

console.log(fun3([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
])); // 15



// Task 4
function fun4(...boxes) {
    return boxes.reduce((sum, item) => sum + item.reduce((mult, curr) => mult * curr, 1), 0)
}
console.log(fun4([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63
console.log(fun4([2, 2, 2], [2, 1, 1]));  // 10


// Task 5
function fun5(obj) {
    
    return Object.keys(obj).reduce((key1, key2) => obj[key1] > obj[key2] ? key1 : key2, {})

}
console.log(fun5({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29
})); //Emma

console.log(fun5({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33
}));  // Sam


