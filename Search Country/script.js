let button = document.querySelector(".darkMode");
let select = document.querySelector(".select");
let card = document.querySelector(".row");
let title = document.querySelector(".card-title");
let search = document.querySelector(".form-control");

BASE_URL = ("https://restcountries.com/v2/all")

axios(BASE_URL).then((res) => {
    console.log(res.data);
    drawCards(res.data);
});


function drawCards(arr) {
    card.innerHTML = ""
    arr.forEach((element) => {
        card.innerHTML += `
          <div class="col-3 m-4">
              <a href="index.html?name=${element.name}"></a>
        <div class="card" style="width: 18rem;">
          <img src="${element.flags.svg}" class="card-img-top">
          <div class="card-body">
         <h5 class="card-title">${element.name}</h5>
         <p>${element.region}</p>
          <p>${element.population}</p>
          <p>${element.capital}</p>
            </p>
          </div>
        </div>
      </div>
        
        `

    })


}

search.addEventListener("input", function (e) {
    axios(BASE_URL).then((res) => {
       let searchedName = res.data.filter((element) =>
            element.name
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
       ) ;   
        console.log(searchedName);
        drawCards(searchedName)
 })
});



select.addEventListener("change",function(e){
// console.log(e.target.value);
axios(BASE_URL).then((res)=>{
let filteredCards=res.data.filter((element)=>
element.region
.toLocaleLowerCase()==e.target.value.toLocaleLowerCase())
console.log(filteredCards );
drawCards(filteredCards);
})
});

