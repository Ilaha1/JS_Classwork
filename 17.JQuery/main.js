

//1
const colors=['red','green','blue','yellow','orange','brown'] 

$(".change").click(function(){
$(".title").css("color",colors[Math.floor(Math.random()*colors.length)]);
});


//2

$(".show").click(function(e) {
    $(".title").show();
})

//3
$(".hide").click(function(e) {
    $(".title").hide();
})

//4

const numbers=[4,2,false,null,'false',NaN,undefined,8,true,'9']

 let sum=0
 $.map(numbers,(value,index)=>{
    if(value)
    sum +=index
 })
console.log(sum);


  