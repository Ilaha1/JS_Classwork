//1.Write a function that takes an array of numbers as input and returns the median of the array

    function medianOfArr(arr1) {
        let concat = arr1;
        concat = concat.sort(
            function (a, b) { return a - b });
      
        console.log(concat);
        var length = concat.length;
      
        if (length % 2 == 1) {
      
            
            console.log(concat[(length / 2) - .5])
            return concat[(length / 2) - .5]
      
        }
        else {
            console.log((concat[length / 2] 
                + concat[(length / 2) - 1]) / 2);
                  
            return (concat[length / 2] 
                + concat[(length / 2) - 1]) / 2;
        }
    }
      
    arr1 = [2,4,5,8,7,9]
    //   arr1=[3,5,6,8,7]
    medianOfArr(arr1)

