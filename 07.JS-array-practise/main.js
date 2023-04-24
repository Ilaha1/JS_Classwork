//   Homework
// let arr1=[4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7,]

1
function SumOfNumbers(){
    let sumOfNumbers = 0;
numbers.forEach((item, index) => {
  sumOfNumbers += item;
})
}



console.log(SumOfNumbers = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7,]
);


// 2



// Practise

// 1
let arr = [2, 4, -3, -43, 41, -3];
console.log(arr.filter((element) => element > 0));

// 2
function isRectangular(a, b, c,) {
    if (
        a ** 2 + b ** 2 == c ** 2 ||
        a ** 2 + c ** 2 == b ** 2 ||
        b ** 2 + c ** 2 == a ** 2
    ) {
        return "yes"
    }
    else {
        return "no"
    }

}

console.log(isRectangular(3, 4, 5));
console.log(isRectangular(3, 5, 4));
console.log(isRectangular(3, 6, 4));

// 3
function factorial(n){
    let result=1
    for( let i=2;i<=n;i++){
        result*=i
    }
return result
}
console.log(factorial(3));
console.log(factorial(6));


// 4
const countries = [
    "Finland",
    "Denmark",
    "Sweden",
    "Azerbaijan",
    "Norway",
    "Iceland",
];
function findMaxLength(array) {
    let newArray=array.map((el)=> el.length);
    return array.find((el) => el.length == Math.max(...newArray));
}
console.log(findMaxLength(countries));


// 5
const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];
let arr2 = [
    {
        name: "test",
        key: 9,
    },
    {
        name: "task",
        key: 4,
    },
    {
        name: "tanqo",
        key: 3,
    },
    {
        name: "like",
        key: 2,
    },
    {
        name: "task",
        key: 5,
    },
    {
        name: "Trust",
        key: 8,
    },
    {
        name: "test",
        key: 12,
    },
    {
        name: "last",
        key: 6,
    },
    {
        name: "tanqo",
        key: 1,
    },
    {
        name: "elephant",
        key: 13,
    },
    {
        name: "Love",
        key: 11,
    },
    {
        name: "small",
        key: 7,
    },
    {
        name: "Little",
        key: 10,
    },
];
console.log(
    arr2.filter((element) => element.name.toLocaleLowerCase().startsWith("t"))
);
console.log(
    arr2.filter(
        (element) =>
            element.name.toLocaleLowerCase().startsWith("t") &&
            element.name.toLocaleLowerCase().endsWith("t")
    )
);

let lengthsArray = arr2.map((el) => el.name.length);
console.log(lengthsArray);
console.log(Math.max(...lengthsArray));
let selectedObj = arr2.find(
    (element) => element.name.length === Math.max(...lengthsArray)
);
console.log(selectedObj.key);

// 6

let newArr = arr2.filter(
    (el) => el.key > 10 && el.name.toLocaleLowerCase().startsWith("l")
);
console.log(newArr);

// 7
let keysArr = arr2.map((el) => el.key);
let nArr = arr2.find((el) => el.key == Math.max(...keysArr));
console.log(nArr);

// 8

console.log(
    arr2.filter(
        (el) =>
            el.name.toLocaleLowerCase().indexOf("t") !==
            el.name.toLocaleLowerCase().lastIndexOf("t")
    )
);