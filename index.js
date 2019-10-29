//change website title
const title = document.querySelector("title");
title.textContent = "Fruits & Vegetables Corp";

//change header text
let h1 = document.querySelector("h1");
h1.textContent = "Fruits & Vegetables Corp";
h1.style.color = "red";

//change text on the last tag
const ul = document.querySelector("ul");
const li = document.querySelector("li");

let item = ul.lastElementChild;
ul.removeChild(item);

let liNew = document.createElement("li");
const a = document.createElement("a");
a.setAttribute("href", "#vegetables");
a.textContent = "Vegetables";
liNew.appendChild(a);
ul.appendChild(liNew);

// Swapping Sections
let main = document.querySelector(".main");
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");

let temp = document.createElement("div");
contact.parentNode.insertBefore(temp, contact);
about.parentNode.insertBefore(contact, about);
temp.parentNode.insertBefore(about, temp);
temp.parentNode.removeChild(temp);
