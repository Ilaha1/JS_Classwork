

//1


function capitalizeFirst(str) {
    return str.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
}

console.log(capitalizeFirst("This is a title")); 
console.log(capitalizeFirst("capitalize every word")); 


//2



function encoded(str) {
    const arr = str.split` `
    return arr.map((item) => item.length > 4 ? item.split``.map((item2) => item2.replace(item2, '*')).join`` : item).join` `
    // return arr.map((item) => item.length > 4 ? item.split``.map((item2) => item2 = '*').join`` : item).join` `
}

console.log(encoded("The code is fourty"));  
console.log(encoded("Two plus three is five")); 
console.log(encoded("aaaa aaaaa 1234 123456")); 
