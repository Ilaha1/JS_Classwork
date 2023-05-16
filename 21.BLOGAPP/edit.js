let id = new URLSearchParams(window.location.search).get("id");
let body = document.querySelector(".body");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let edit = document.querySelector(".editBtn")
console.log(id);





axios(`http://localhost:8080/blogs/${id}`).then((res) => {
    form.addEventListener("editBtn", function (e) {
        e.preventDefault();
        let obj = {
            title: title.value,
            body: body.value,
            author: select.value,
            }
        });
        axios.patch(`http://localhost:8080/blogs/${id}`, obj);

        window.location = "home.html";
    });
