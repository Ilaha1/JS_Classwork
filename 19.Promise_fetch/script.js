// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(json => console.log(json))

//  function getCompleted (data) {
// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(response => response.json())
// .then((data)=>{
//     let updated=data.filter((item)=>item.completed);
//     console.log(updated);
// });
//  }
//  getCompleted();

//  function getId(data) {
// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(response => response.json())
// .then((data)=>{
//     let updated=data.filter((item)=>item.userId==2);
//     console.log(updated);
// });
//  }
//  getId();

//  function getTrue(data) {
// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(response => response.json())
// .then((data)=>{
//     let updated=data.filter((item)=>!item.completed);
//     console.log(updated);
// });

//  }
//  getTrue();

// import { BASE_URL } from "./script2.js";
let API_URL = "https://northwind.vercel.app/api/suppliers";

let tbody = document.querySelector("#tbody");

function dataTable() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) =>
    data.forEach((element) => {

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.companyName}</td>
        <td>${element.address?.city}</td>
        <td>${element.address?.country}</td>
        <td>${element.address?.phone}</td>
       <td><button id='delete onclick=deleteEl(${element.id}'>Delete</button></td>
`;
        tbody.append(tr);
        // console.log(tr);
      })
    );
}
dataTable();
