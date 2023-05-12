let tbody = document.querySelector(".tbody");
let input = document.querySelector(".search");
let loading = document.querySelector(".loading");


axios("http://universities.hipolabs.com/search?country=azerbaijan").then((res) => {
    console.log(res.data);
    drawTable(res.data);
});




function drawTable(arr) {
    arr.forEach((element) => {
        tbody.innerHTML += `
    <tr>
                    <td >${element.name}</td>
                    <td>${element.country}</td>
                    <td> ${element.domains[0]}</td>
                    <td><a href="">${element.web_pages[0]}</a></td>               
                </tr>

    `
    });

};

window.onload = function () {
    tbody.innerHTML = "";
    loading.style.display = "flex";
    axios("http://universities.hipolabs.com/search?country=azerbaijan").then((res) => {
        console.log(res.data);
        loading.style.display = "none";
        drawTable(res.data);
    })
}

input.addEventListener("input", function (e) {
    tbody.innerHTML = "";

    loading.style.display = "flex";

    axios(`http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`).then((res) => {
        loading.style.display = "none";

        drawTable(res.data);
    });
});

