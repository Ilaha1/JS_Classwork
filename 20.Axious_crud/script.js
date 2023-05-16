const firstname = document.querySelector("#firstName");
const lastname = document.querySelector("#lastName");
const tBody = document.querySelector("#tBody");
const email = document.querySelector("#email");
const card = document.querySelector("#number");
const form = document.querySelector("#userForm");

const BASE_URL = "http://localhost:8080/users"


async function getAllData() {
    const res = await axios(BASE_URL)
    const data = await res.data
    tBody.innerHTML = "";
    data.forEach((element) => {
        tBody.innerHTML += `
            <tr>
                <td>${element.firstname}</td>
                <td>${element.lastname}</td>
                <td>${element.email}</td>
                <td>${element.card}</td>
                <td><a class="btn edit btn-warning" onclick=edit("${element.id}") href="edit.id=${element.id}",this>Edit</a></td>
                <td><button class="btn btn-danger" onclick=deleteBtn("${element.id}",this)>Delete</button></td>
                <td><button class="btn btn-primary" onclick=details("${element.id}",this)>Details</button></td>
            </tr>
        `;
    });
};
getAllData()



async function deleteBtn(userId) {
    await axios.delete(`${BASE_URL}/${userId}`);
};

let bool;
let arrowUp;
let arrowDown;

form.addEventListener("submit", async function (e) {
    e.preventDefault()
    creatNewPerson()
    // bool = !bool;
    // if (bool) {
    //     await axios(BASE_URL)
    //         let sortUsers = res.data.sort((a, b) => b.firstname.localeCompare(a.firstname));
    //         getAllData(sortUsers);
    // }

    // else {
    //     await axios("http://localhost:8000/users").then((res) => {
    //         let sortUsers = res.data.sort((a, b) => a.firstname.localeCompare(b.firstname));
    //         getAllData(sortUsers);

    //     });

    // }
}
);


// function editUser(userId) {
 
// }

let input = document.querySelector("#search")

input.addEventListener("input", function (e) {
    axios(BASE_URL).then((res) => {
        let filteredUsers = res.data.filter((item) =>
            item.firstname
                .toLocaleLowerCase()
                .includes(e.target.value.toLocaleLowerCase())
        );

        console.log(filteredUsers);
        getAllData(filteredUsers);
    });
});



async function creatNewPerson() {
    let obj = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        card: card.value
    };

    await axios.post(BASE_URL, obj)
    getAllData()
}