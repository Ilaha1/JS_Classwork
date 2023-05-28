let id = new URLSearchParams(window.location.search).get("id");
const title = document.querySelector(".product_title");
const about = document.querySelector(".product_text");
const detail_cards = document.querySelector(".detail_cards")
console.log(id);

axios(BASE_URL).then((res) => {
    console.log(res.data)
    getAllProduct(res.data)
});


function getAllProduct(arr){
    detail_cards.innerHTML="";
    arr.forEach((element) => {
        detail_cards.innerHTML+=`
         <!-- <div class="col-md-3 col_1">
                    <div class="product_card">
                        <img src="./images/o1.png">
                        <h5 class="product_title">${element.name}</h5>
                        <p class="product_text">${element.about}</p>
                    </div>
                </div> -->        
        `
    });
}
getAllProduct();
