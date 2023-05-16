let cards=document.querySelector(".cards")


axios("http://localhost:8080/blogs").then((res) => {
    console.log(res.data);
    getAllData(res.data);
});



function getAllData(arr) {
    arr.forEach((element) => {
        cards.innerHTML += `
               <div class="card">
                <h2>${element.title}</h2>
               <span>${element.body}</span>
                <span>${element.body.slice(0,80)}... <a href="details.html?id=${element.id}">Read more</a></span>
                <p>${element.author}</p>
                <button class="btn btn-danger" onclick=deleteBtn("${element.id}",this)>Delete</button>
                <button class="btn btn-danger" onclick=editBtn("${element.id}",this)>Edit</button>
            </div>
        `;
    });
};

function deleteBtn(id, btn) {
    axios.delete(`http://localhost:8080/blogs/${id}`);
    btn.closest("tr").remove(id);
};
