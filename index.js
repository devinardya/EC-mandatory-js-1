//change website title

const title = document.querySelector("title");
title.textContent = "Fruits & Vegetables Corp";

//change header text

let h1 = document.querySelector("h1");
h1.textContent = "Fruits & Vegetables Corp";

//change text on the last li tag

const ul = document.querySelector("ul");
let item = ul.lastElementChild;
item.textContent = "";

const a = document.createElement("a");
a.setAttribute("href", "#vegetables");
a.textContent = "Vegetables";
ul.lastElementChild.appendChild(a);

// Swapping Sections

let main = document.querySelector("#main");
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");

main.insertBefore(about, contact);

// Adding H2 tag to Section "ABOUT"

about.textContent="";
let aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About";
about.appendChild(aboutTitle);

let aboutText = document.createElement("p");
aboutText.textContent = "We're the best in fruits & vegetables";
about.appendChild(aboutText);

// Adding H2 tag to Section "CONTACT"

let contactP = contact.firstElementChild;
let contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact";
contact.appendChild(contactTitle);

contact.insertBefore(contactTitle, contactP);

// Adding main.css to head

let linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', "main.css");

document.head.appendChild(linkElement);

//Fixing td into th in thead

let thead = document.querySelector("thead");
let tablefirst = thead.firstElementChild;
thead.removeChild(tablefirst);

let tr = document.createElement("tr");
let firstTh = document.createElement("th");
firstTh.textContent = "Name";
let secondTh = document.createElement("th");
secondTh.textContent = "Email";

tr.appendChild(firstTh);
tr.appendChild(secondTh);
thead.appendChild(tr);