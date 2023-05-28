const BASE_URL = 'http://localhost:8000/users';
const cards = document.querySelector(".cards");
const search = document.querySelector(".search");
const sorted = document.querySelector(".sorted");
const text = document.querySelector(".product_text");

axios(BASE_URL).then((res) => {
  console.log(res.data)
  getAllProduct(res.data)
});

function getAllProduct(arr) {
  cards.innerHTML = ""
  arr.forEach((element) => {
    cards.innerHTML += `
                          <div class="col-md-3 col_1">
                            <img src="./images/o1.png" class="m-3">
                            <h5 class="m-3">${element.name}</h5>
                            <p>${element.about}
                            </p>
                            <button class="btn-success">Edit</button>
                            <button class="btn-danger"  onclick="deleteCard(${element.id},this)">Delete</button><br><br>
                            <a href="./fav.html?id=${element.id}""><i class="fa-regular fa-heart icon m-2"></i></a>
                            <a href="./details.html?id=${element.id}"><i class="fa-solid fa-info icon m-2"></i></a>
                        </div>
    `
  });
}

search.addEventListener("input", function (e) {
  axios(BASE_URL).then((res) => {
    let searchedName = res.data.filter((element) =>
      element.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    console.log(searchedName);
    getAllProduct(searchedName)
  })
});


sorted.addEventListener("click", function () {
  if (this.innerHTML == "Ascending") {
    axios(BASE_URL).then((res) => {
      let sortAsc = res.data.sort((a, b) => a.id - b.id);
      getAllProduct(sortAsc);
    });
    this.innerHTML = "Descending";
  } else if (this.innerHTML == "Descending") {
    axios(BASE_URL).then((res) => {
      let sortDsc = res.data.sort((a, b) => b.id - a.id);
      getAllProduct(sortDsc);
    });
    this.innerHTML = "Default";
  } else {
    axios(BASE_URL).then((res) => {
      getAllProduct(res.data);
    });
    this.innerHTML = "Ascending";
  }
});

// sorted.addEventListener("click", function () {
//   if (this.innerHTML == "Ascending") {
//     axios("http://localhost:8000/users").then((res) => {
//       let sortData = res.data.sort((a, b) => a.id - b.id);
//       getAllProduct(sortData);
//     });
//   }
//   else {
//     axios("http://localhost:8000/users").then((res) => {
//       let sortData = res.data.sort((a, b) => b.id - a.id);
//       getAllProduct(sortData);
//     });

//   }
// });




async function deleteCard(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("cards").remove();
}



