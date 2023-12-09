//EXAMINE THE DOCUMENT OBJECT//
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent= "Hello";
console.log(document.forms);
console.log(document.links);
console.log(document.images);


//SELECTOR//
//A.GETELEMENTBTiD//
//console.log(document.getElementById("header-title"));
var headerTitle=document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent = "Hello";
headerTitle.innerText = "GoodBye";
console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h3>Hello</h3>";

//STYLE CHANGES//
var headerTitle = document.getElementById("header-title");
console.log(headerTitle);
var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px black";


//GETELEMENTBYCLASSNAME//
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[0].textContent = "Hello 2";
items[1].style.fontWeight="bold";
items[1].style.backgroundColor="yellow";

//Assignment Problem
var item = document.getElementsByClassName("title");
console.log(item);
console.log(item[0]);
item[0].style.fontWeight="bold";
item[0].style.color="green";