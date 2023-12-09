//TRAVERSING THE DOM
var itemList=document.querySelector("#items");
//PARENT NODE
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="grey";
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);
//PARENT ELEMENT
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="grey";
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);
//CHILD NODE
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="yellow";
//FIRST CHILD
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent="Hello 1";

//LAST CHILD
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent="Hello 1";

//NEXT SIBLING
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//PREVIOUS SIBLING
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="green";

//CREATE ELEMENT
//CREATE A DIV
var newDiv=document.createElement("div");
//Add Class
newDiv.className="hello";
//Add Id
newDiv.id="hello1";
//Add Attr
newDiv.setAttribute("title","Hello Div");
//Create Text Node
var newDivText=document.createTextNode("Hello World");
//Add Text To Div
newDiv.appendChild(newDivText);
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");

console.log(newDiv);
newDiv.style.fontSize="30px";
container.insertBefore(newDiv,h1);