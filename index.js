//change website title
const title = document.querySelector("title");
title.textContent = "Fruits & Vegetables Corp";

//change header text
let h1 = document.querySelector("h1");
h1.textContent = "Fruits & Vegetables Corp";

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
let main = document.querySelector("#main");
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");

main.insertBefore(about, main.childNodes[0]);

// Adding H2 tag to Section "ABOUT"
about.textContent="";
let aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About";
about.appendChild(aboutTitle);

let aboutText = document.createElement("p");
aboutText.textContent = "We're the best in fruits & vegetables";
about.appendChild(aboutText);

// Adding H2 tag to Section "CONTACT"
let contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact";
contact.appendChild(contactTitle);

contact.insertBefore(contactTitle, contact.childNodes[0]);


// Adding main.css to head
let head = document.querySelector("head");
let linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', "main.css");

head.appendChild(linkElement);

//Fixing td into th in thead

let table = document.querySelector("table");
let tablefirst = table.firstElementChild;
table.removeChild(tablefirst);

let thead = document.createElement("thead");
let firstTh = document.createElement("th");
firstTh.textContent = "Name"
let secondTh = document.createElement("th");
secondTh.textContent = "Email"

thead.appendChild(firstTh);
thead.appendChild(secondTh);
table.appendChild(thead);

table.insertBefore(thead, table.childNodes[0]);