let title=document.querySelector(".title");
let body=document.querySelector(".body");
let select=document.querySelector(".select");
let form=document.querySelector("form");
let btn=document.querySelector(".btn");





form.addEventListener("", function (e) {
    
    e.preventDefault();

    let obj = {
       title:title.value,
       body:body.value,
       author:select.value,
        };


    fetch(`http://localhost:8080/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        
    }
    )
    window.location("home.html")
})