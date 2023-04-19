// / 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"

function secretName(anyNumber) {
    return anyNumber.map(item => item.toUpperCase().substring(0, 1)).join('')

}
console.log(secretName(names1.sort((a, b) => (a, b))));
console.log(secretName(names2.sort((a, b) => (a, b))));
console.log(secretName(names3.sort((a, b) => (a, b))));


// 2.Manipulate array///////////////////////////////////////////////////////

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },

]

const found = users.filter((item) => item.uni == "UNEC" && item.surname.toLocaleLowerCase().startsWith('r'))
console.log(found);

// 2.2.Show users whose age is eqaul to 22 and name start 'a'.

const find = users.filter((item) => item.age === '22' && item.name.toLocaleLowerCase().startsWith('a'))
console.log(find);

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
const newArray = []

// 2.4.Sort users by age (ascending).

console.log(users.sort((a, b) => a.age.localeCompare(b.age)));

// 3.Shuffle array////////////////////////////////////////////////////////////////////

function shuffle(arr1) {
    arr1.sort(() => Math.random() - 0.5);
    return arr1
}


const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]

shuffle(letters)
console.log(letters);

// 4.Divide 2 the price of arr4.
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]

const divide = users.filter((item) => item.price = item.price / 2)
// console.log(divide(arr4));


// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251

// function reverseNum(){

// }

const digits1 = String(num1).split('').map(Number); console.log(digits1);
const digits2 = String(num2).split('').map(Number); console.log(digits2);
const digits3 = String(num3).split('').map(Number); console.log(digits3);

const reversed1 = digits1.reverse();
const reversed2 = digits2.reverse();
const reversed3 = digits3.reverse();
console.log('reversed:', reversed1, reversed2, reversed3);