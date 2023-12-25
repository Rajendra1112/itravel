let container = {
    img: [
        {
            image:"photos/ktm/1.jpg",
            name: "ktm darvar"
        },
        {
            image:"photos/ktm/2.jpg",
            name: "ktm darvar square"
        },
        {
            image:"photos/ktm/5.jpg",
            name: "ktm dar"
        },
        {
            image:"photos/ktm/4.jpg",
            name: "ktm darvar"
        },
    ]
}
for (const i of container.img) {
    const img = document.createElement("div");
    img.classList.add("img");
    const pho = document.createElement("img");
    pho.setAttribute("src", i.image);
    const h5 = document.createElement("h5");
    h5.innerText = i.name;
    img.appendChild(pho);
    img.appendChild(h5);
    document.getElementById("gal-col").appendChild(img);
}



const nav_btn = document.querySelector(".nav-btn");
const nav_header = document.querySelector(".header");

const toogleNav = () =>{
    nav_header.classList.toggle("active");
}

nav_btn.addEventListener("click", () => toogleNav());

// -----slider------
var myIndex = 0;
carousel();