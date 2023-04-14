 //1.Return the First Element in an Array.
 function getFirstValue(first){
    for(let i in first)
    return first[i];
    }
    console.log(getFirstValue([1, 2, 3]));
    console.log(getFirstValue([80, 5, 100]));
    console.log(getFirstValue([-500, 0, 50]));
    
      //2.Return the Last Element in an Array.
     function getLastItem (last) {
            return last[last.length -1];
    }
    console.log(getLastItem([1, 2, 3])); 
    console.log(getLastItem(["cat", "dog", "duck"]));
    console.log(getLastItem([true, false, true]));
    
    
      // 3.Find the Index
     let findIndex = (arr, x) => {
        let y;
        let 
         for (let i = 0; i < arr.length; i++) { 
            if (arr[i] !== x) {
                y = i;
            } else {
                return i;
            }
        }
    };
    
    console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
    console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
    console.log(findIndex(["a", "g", "y", "d"], "d"));
    console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))
    
    // 4.Return the Sum of Two Numbers.
    function sumOfTwoNumber (num1,num2) {
        let addition=num1+num2;
        console.log(addition)
    }
    sumOfTwoNumber(3, 2);
    sumOfTwoNumber(-3, -6)
    sumOfTwoNumber(7, 3)
    
    // 5.Less Than 100?
    function lessThan100(num1,num2){
        let addition=num1+num2;
        if (num1+num2< 100) {
            return true;
        } else {
            return false;
        }
    }
    console.log(lessThan100(22, 15));
    console.log(lessThan100(83, 34));
    console.log(lessThan100(3, 77));
    
    // 6.Volume of a Box
    function volumeOfBox(width,length,height){
         multiplication = width* length*height;
        console.log(multiplication)
    }
    
    volumeOfBox({ width: 2, length: 5, height: 1 })
    
    volumeOfBox({ width: 4, length: 2, height: 2 })
    
    volumeOfBox({ width: 2, length: 3, height: 5 })
    
    // 7.Basketball Points
    function points(twoPointers, threePointers){
        let twoPointersMult = twoPointers*2
        let threePointersMult = threePointers*3
        total=twoPointersMult+threePointersMult
        console.log(total);
    
    }
    points(1, 1) 
    points(7, 5) 
    points(38, 8)
    
    //8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
    function fillInfo(){
    const arr5=['name:${"my name"}; surname:${"my surname"};city:${"my city"}']
    arr5[0]= 'Ilahe',
    arr5[1]='Guliyeva',
    arr5[2]='Gence'
    console.log(arr5)
    
    }
    
    fillInfo()