//reverse string

function reverseString(str) {
   
    return str.split('').reverse('').join('')
}
console.log(reverseString("salam"));

function reverseString2(str) {
   let result=""
   for (let i=str.length-1; i>=0; i--) {
   
    result +=str[i]
   }
   return result
}
console.log(reverseString("salam"));


//polidrom

function isPolidrom(word){
if ( word===word.split("").reverse().join("")){
  return  `yes ${word} is Polidrom`
}
else return  `no ${word} is not Polidrom`                                  
}
console.log(isPolidrom("refer"));
console.log(isPolidrom("name"));               


function isPolidrom2(word){
        word===word.split("").reverse().join("")
        ?console.log(`yes,  ${word} is Polidrom `)
        :console.log(`no,  ${word} is not Polidrom` );

    }
    console.log(isPolidrom2("refer"));
    console.log(isPolidrom2("name"));
    

//remove dublicated
let arr=[1,2,2,11,4,5,4,11] 
function removeDublicated(arr) {
  return arr.filter((el,index)=> arr.indexOf(el)==index)
}

// console.log(removeDublicated(arr));

function removeDublicated2(arr) {
    let result=[];
   arr.forEach((element) => {
   !result.includes(element) && result.push(element);
    
   });
   return result
  }
  console.log(removeDublicated(arr));
  
  let mySet=new Set(arr);
  console.log([...mySet]);
//   console.log(mySet);


//generate otp

function generateOtp() {
    let digits="0123456789"
    let num=''
    for(let i=0;i<4;i++){
        num+=digits[Math.floor(Math.random()*10)]
    }
    return num
}

console.log(generateOtp());
console.log(generateOtp());
console.log(generateOtp());

function generateOtp2() {
    let digits="0123456789"
    let num=''
    for(let i=0;i<4;i++){
        num+=Math.floor(Math.random()*10)
    }
    return num
}
console.log(generateOtp2());
console.log(generateOtp2());
console.log(generateOtp2());



// find all truth values

let myArr=[1,4,true,false,0,5,"hello",undefined]
console.log(myArr.filter(Boolean));  //all truth
console.log(myArr.filter((element)=>!Boolean(element)));  //all falsy

