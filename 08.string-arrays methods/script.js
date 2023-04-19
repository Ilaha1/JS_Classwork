// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
const newArr = arr1.map((items) => (items[0].toUpperCase() + items.slice(1, -1) + items.at(-1).toUpperCase()))
console.log(newArr);


// 2.String and Array
let text = 'We are MERN-Stack developers'

// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!

let newText = text.replace('MERN-Stack', 'Front-end')
console.log(newText);


// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
let newText2 = text.replace('e', 'a')
console.log(newText2);

// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!

let newText3 = text.concat("in Microsoft!")
console.log(newText3);


// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]

const newArr4 = []
text.split('').map((items, index) => items.toLocaleLowerCase() === 'r' ? newArr4.push(index) : newArr4)
console.log(newArr4);

// 5.Find index of first 'r' (excepting 'are').  // 9

newText=text.toLocaleLowerCase().indexOf("r",5)
console.log(newText);


// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
let vowels = ['a', 'i', 'o', 'u', 'e']
const result=text.split("").filter((item,index,arr)=>vowels.includes(item)&& arr.indexOf(item)===index) 
 console.log( result);


// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'.
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },

]




// console.log: (60)


// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
console.log(arr4.sort((a, b) => a - b))

// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(Infinity));

// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']

// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']

console.log(colors.sort((a,b)=>a.length-b.length ||a.localeCompare(b)));        


