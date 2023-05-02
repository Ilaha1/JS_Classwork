const arr = ['6', 8, NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]

//1

const falsy = (newArr1) => {
    let newArr = []
    for (let i = 0; i < newArr1.length; i++) {
        if (!newArr1[i]) {
            newArr.push(newArr1[i])
        }
    }
    return newArr
}
console.log(falsy(arr));



// 2
const stringValues = (myArr) => {
    const newArr = []
    for (let i = 0; i < myArr.length; i++) {
        if (typeof myArr[i] === 'string') {
            newArr.push(myArr[i])
        }
    }
    return newArr
}

console.log(stringValues(arr));



// 3

const sliceArr = (Arr) => {
    const newArr = []
    for (let i = 3; i < 8; i++) {
        newArr.push(Arr[i])
    }
    return newArr
}

console.log(sliceArr(arr)); 


//4
const sumArr = (Arr1) => {
    let sum = 0
    for (let i = 0; i < Arr1.length; i++) {
        if (typeof Arr1[i] === 'number' && Arr1[i]) {
            sum += Arr1[i]
        }
    }
    return sum
}

console.log(sumArr(arr)); 

//5

const findLastIndex = (Arr2) => {
    for (let i = Arr2.length; i >= 0; i--) {
        if (Arr2[i] === 8) {
            return i
        }
    }
}

console.log(findLastIndex(arr));


//6
const reverseArr = (arr2) => {
    let newArr1 = []
    for (let i = arr2.length - 1; i >= 0; i--) {
        newArr1.push(arr2[i])
    }
    return newArr1
}

console.log(reverseArr(arr));  

//7

const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51]

// const sortArr = (myArr) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < myArr.length; i++) {
//             if (myArr[i] > myArr[i + 1]) {
//                 sorting = true
//                 let num = myArr[i]
//                 myArr[i] = myArr[i + 1]
//                 myArr[i + 1] = num
//             }
//         }
//     }
//     return myArr
// }
// console.log(sortArr(arrNum)); 

//8
const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']

// const sortLetters = (myArr) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < myArr.length; i++) {
//             if (myArr[i] > myArr[i + 1]) {
//                 sorting = true
//                 let letter = myArr[i]
//                 myArr[i] = myArr[i + 1]
//                 myArr[i + 1] = letter
//             }
//         }
//     }
//     return myArr
// }

// console.log(sortLetters(arrLetters)); 

//9
 const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]

const flatArr = (myArr9) => {
    const newArr = []
    console.log(myArr9.length);
    for (let i = 0; i < myArr9.length; i++) {
        for (let j = 0; j < myArr9[i].length; j++) {
            newArr.push(myArr9[i][j])
        }
    }
    return newArr
}

console.log(flatArr(arr9));