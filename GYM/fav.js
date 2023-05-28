const BASE_URL = 'http://localhost:8000/users';
const cards = document.querySelector(".cards");
const remove = document.querySelector(".remove");


axios(BASE_URL).then((res) => {
    console.log(res.data)
    getAllFav(res.data)
});

// function getAllFav(arr) {
//     cards.innerHTML = ""
//     arr.forEach((element) => {
//         cards.innerHTML += `
//                           <div class="col-md-3 col_1">
//                             <img src="./images/o1.png" class="m-3">
//                             <h5 class="m-3">${element.name}</h5>
//                             <p>${element.about}
//                             </p>
//                             <button class="btn-success">Edit</button>
//                             <button class="btn-danger"  onclick="deleteCard(${element.id},this)">Delete</button><br><br>
//                             <a href="./fav.html?id=${element.id}""><i class="fa-regular fa-heart icon m-2"></i></a>
//                             <a href="./details.html?id=${element.id}"><i class="fa-solid fa-info icon m-2"></i></a>
//                         </div>
//     `
//     });
// }



async function getAllData() {
    let res = await axios.get(BASE_URL);
    let data = await res.data;
    console.log(data);
    drawFav(data);
    btn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}
getAllData();

function drawFav(arr) {
    cards.innerHTML = "";
    arr.forEach((element) => {
        cards.innerHTML+= `
 <div class="col-md-3 col-sm-6">
                        <h5 class="m-3">${element.name}</h5>
                        <p>${element.about}</p>
                        <button class="moreBtn">More Details</button><br><br>
                        <div class="icons">
                            <i class="fa-solid fa-pencil icon m-2" onclick="editCard(${element.id},this)"></i>
                            <i class="fa-regular fa-trash-can icon m-2" onclick="deleteCard(${element.id},this)"></i>
                            <a href="./fav.html"><i class="fa-regular fa-heart icon m-2"></i></a>
                        </div>
                    </div>
          `;
    });
}

drawFav()

async function remove(id, btn) {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest("cards").remove();
}