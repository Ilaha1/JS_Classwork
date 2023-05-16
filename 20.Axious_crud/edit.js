

// async function editUser(id){
//     let filter=usersArr.filter(el=>el.id==id)
//     console.log(filter);
//     filter.forEach(users=>{
//         allInputs[0].value = res.data.firstname;
//         allInputs[1].value = res.data.lastname;
//         allInputs[2].value = res.data.email;
//          allInputs[3].value=res.data.card;


//     })

// }

// axios(`http://localhost:8080/users/${id}`).then((res) => {
  
//     submitBtn.addEventListener("submit", function (e) {
//         e.preventDefault();
//         let obj = {
//             firstname: allInputs[0].value,
//                 lastname: allInputs[1].value,
//                 email: allInputs[2].value,
//                 card:allInputs[3].value

//         };
//         axios.patch(`http://localhost:8080/users/${id}`, obj);

//         window.location = "edit.html";
//     });
// });


let id = new URLSearchParams(window.location.edit).get("id");
// let body = document.querySelector(".body");
// let title = document.querySelector(".title");
// let author = document.querySelector(".author");
// let edit = document.querySelector(".editBtn")
// console.log(id);





axios(`http://localhost:8080/users/${id}`).then((res) => {
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
