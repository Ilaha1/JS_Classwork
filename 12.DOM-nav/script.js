
const header=document.createElement("header");
const nav=document.createElement("nav");
const ul=document.createElement("ul");
const home=document.createElement("li");
const about=document.createElement("li");
const blog=document.createElement("li");
const contact=document.createElement("li");
const section1=document.createElement("section");
const section2=document.createElement("section");
const section3=document.createElement("section");
const section4=document.createElement("section");

document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(home);
ul.append(about);
ul.append(blog);
ul.append(contact);

section1.append('Home');
section2.append('About');
section3.append('Blog');
section4.append('Contact');

section1.id="sec1"
section2.id="sec2"
section3.id="sec3"
section4.id="sec4"

document.body.append(section1);
document.body.append(section2);
document.body.append(section3);
document.body.append(section4);


home.innerHTML=`<strong>Home</strong>`;
about.innerHTML=`<strong>About</strong>`;
blog.innerHTML=`<strong>Blog</strong>`;
contact.innerHTML=`<strong>Contact</strong>`;


ul.style.height="10vh"
ul.style.display="flex"
ul.style.justifyContent = "space-around"
ul.style.backgroundColor="#000"
ul.style.alignItems="center"

home.style.listStyle="none"
home.style.color="#fff"
home.style.cursor="pointer"

about.style.listStyle="none"
about.style.color="#fff"
about.style.cursor="pointer"
blog.style.listStyle="none"
blog.style.color="#fff"
blog.style.cursor="pointer"
contact.style.listStyle="none"
contact.style.color="#fff"
contact.style.cursor="pointer"

section1.style.height="100vh"
section1.style.display="flex"
section1.style.alignItems="center"
section1.style.justifyContent="center"
section1.style.fontSize="20px"
section1.style.fontWeight="bolder"
section1.style.border="1px dashed #000"

section2.style.height="100vh"
section2.style.display="flex"
section2.style.alignItems="center"
section2.style.justifyContent="center"
section2.style.fontSize="20px"
section2.style.fontWeight="bolder"
section2.style.border="1px dashed #000"



section3.style.height="100vh"
section3.style.display="flex"
section3.style.alignItems="center"
section3.style.justifyContent="center"
section3.style.fontSize="20px"
section3.style.fontWeight="bolder"
section3.style.border="1px dashed #000"



section4.style.height="100vh"
section4.style.display="flex"
section4.style.alignItems="center"
section4.style.justifyContent="center"
section4.style.fontSize="20px"
section4.style.fontWeight="bolder"
section4.style.border="1px dashed #000"

home.addEventListener("click",function(){
    window.location="#sec1"
}
)

about.addEventListener("click",function(){
    window.location="#sec2"
}
)
blog.addEventListener("click",function(){
    window.location="#sec3"
}
)
contact.addEventListener("click",function(){
    window.location="#sec4"
}
)